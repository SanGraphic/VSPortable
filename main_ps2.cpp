#include <stdio.h>
#include <string.h>
#include <malloc.h>
#include <kernel.h>
#include <sifrpc.h>
#include <gsKit.h>
#include <dmaKit.h>
#include <gsToolkit.h>
#include <loadfile.h>
#include <libpad.h>

extern "C" {
    size_t malloc_usable_size(void* ptr) { return 0; }
}

// QuickJS Library
#include "quickjs/quickjs.h"

// Globals
GSGLOBAL *gsGlobal;
GSFONTM *gsFontM;
JSContext *ctx;
JSRuntime *rt;

// Native Binding: __draw(cmdString)
static JSValue js_native_draw(JSContext *ctx, JSValueConst this_val, int argc, JSValueConst *argv) {
    if (argc < 1) return JS_UNDEFINED;
    
    const char *cmd = JS_ToCString(ctx, argv[0]);
    if (!cmd) return JS_UNDEFINED;

    if (strncmp(cmd, "CLEAR", 5) == 0) {
        gsKit_clear(gsGlobal, GS_SETREG_RGBAQ(0x00,0x00,0x00,0x00,0x00));
    } 
    else if (strncmp(cmd, "FLIP", 4) == 0) {
        gsKit_queue_exec(gsGlobal);
        gsKit_sync_flip(gsGlobal);
    }
    // E.g. "FILL x y w h color"
    else if (strncmp(cmd, "FILL", 4) == 0) {
        float x, y, w, h;
        // Parse basic geometry (color parsing simplified for PoC)
        sscanf(cmd, "FILL %f %f %f %f", &x, &y, &w, &h);
        gsKit_prim_sprite(gsGlobal, x, y, x + w, y + h, 1, GS_SETREG_RGBAQ(0xFF,0xFF,0xFF,0x80,0x00));
    }

    JS_FreeCString(ctx, cmd);
    return JS_UNDEFINED;
}

// Pad Globals
static char padBuf[256] __attribute__((aligned(64)));
struct padButtonStatus buttons;
uint32_t paddata;
uint32_t old_pad = 0;

// Native Binding: __get_pad_state()
static JSValue js_native_get_pad_state(JSContext *ctx, JSValueConst this_val, int argc, JSValueConst *argv) {
    padRead(0, 0, &buttons);
    paddata = 0xffff ^ buttons.btns;
    return JS_NewInt32(ctx, paddata);
}

// Native Binding: console.log
static JSValue js_console_log(JSContext *ctx, JSValueConst this_val, int argc, JSValueConst *argv) {
    for (int i = 0; i < argc; i++) {
        const char *str = JS_ToCString(ctx, argv[i]);
        if (str) {
            printf("%s ", str);
            JS_FreeCString(ctx, str);
        }
    }
    printf("\n");
    return JS_UNDEFINED;
}

// CD-ROM Asset Loader
char* load_file_from_cd(const char* filepath) {
    char fullpath[256];
    snprintf(fullpath, sizeof(fullpath), "cdrom0:/%s;1", filepath);
    
    FILE *f = fopen(fullpath, "rb");
    if (!f) {
        printf("Failed to load %s\n", fullpath);
        return NULL;
    }
    fseek(f, 0, SEEK_END);
    long fsize = ftell(f);
    fseek(f, 0, SEEK_SET);

    char *string = (char*)malloc(fsize + 1);
    if (!string) {
        fclose(f);
        return NULL;
    }
    fread(string, fsize, 1, f);
    fclose(f);
    string[fsize] = 0;
    
    return string;
}

void print_status(const char* msg, uint64_t color = GS_SETREG_RGBAQ(0x00,0x00,0x20,0x00,0x00)) {
    gsKit_clear(gsGlobal, color);
    // Draw a small indicator square in the corner to show activity
    gsKit_prim_sprite(gsGlobal, 10, 10, 30, 30, 1, GS_SETREG_RGBAQ(0xFF,0xFF,0xFF,0x80,0x00));
    gsKit_fontm_print(gsGlobal, gsFontM, 50, 400, 1, GS_SETREG_RGBAQ(0xFF,0xFF,0xFF,0x80,0x00), msg);
    gsKit_queue_exec(gsGlobal);
    gsKit_sync_flip(gsGlobal);
    printf("%s\n", msg);
}

static char status_buf[256];

int main(int argc, char *argv[]) {
    // Basic RPC Init
    SifInitRpc(0);
    SifLoadFileInit();
    
    // Load Pad Module
    SifLoadModule("rom0:SIO2MAN", 0, NULL);
    SifLoadModule("rom0:PADMAN", 0, NULL);

    // Initialize gsKit
    gsGlobal = gsKit_init_global();
    gsGlobal->PrimAlphaEnable = GS_SETTING_ON;
    dmaKit_init(D_CTRL_RELE_OFF, D_CTRL_MFD_OFF, D_CTRL_STS_UNSPEC, D_CTRL_STD_OFF, D_CTRL_RCYC_8, 1 << DMA_CHANNEL_GIF);
    dmaKit_chan_init(DMA_CHANNEL_GIF);
    gsKit_init_screen(gsGlobal);

    // Initialize Font
    gsFontM = gsKit_init_fontm();
    gsKit_fontm_unpack(gsFontM);
    gsFontM->Spacing = 0.8f;

    print_status("[VS-PS2] Engine Start", GS_SETREG_RGBAQ(0x40,0x00,0x00,0x00,0x00));

    // Initialize QuickJS
    rt = JS_NewRuntime();
    JS_SetMemoryLimit(rt, 16 * 1024 * 1024); 
    JS_SetMaxStackSize(rt, 1024 * 1024); // 1MB stack
    
    ctx = JS_NewContext(rt);

    // Initialize Pad
    padInit(0);
    padPortOpen(0, 0, padBuf);

    // Bind Native Functions
    JSValue global_obj = JS_GetGlobalObject(ctx);
    JS_SetPropertyStr(ctx, global_obj, "__draw", JS_NewCFunction(ctx, js_native_draw, "__draw", 1));
    JS_SetPropertyStr(ctx, global_obj, "__get_pad_state", JS_NewCFunction(ctx, js_native_get_pad_state, "__get_pad_state", 0));
    
    // Bind console
    JSValue console = JS_NewObject(ctx);
    JS_SetPropertyStr(ctx, console, "log", JS_NewCFunction(ctx, js_console_log, "log", 1));
    JS_SetPropertyStr(ctx, global_obj, "console", console);
    
    JS_FreeValue(ctx, global_obj);

    // Stage 1: Shim
    print_status("Load SHIM...", GS_SETREG_RGBAQ(0x00, 0x40, 0x00, 0x00, 0x00));
    char* shim_code = load_file_from_cd("SHIM.JS");
    if (shim_code) {
        print_status("Eval SHIM...", GS_SETREG_RGBAQ(0x00, 0x60, 0x00, 0x00, 0x00));
        JSValue res = JS_Eval(ctx, shim_code, strlen(shim_code), "shim.js", JS_EVAL_TYPE_GLOBAL);
        free(shim_code);
        if (JS_IsException(res)) {
            print_status("SHIM Error", GS_SETREG_RGBAQ(0xFF, 0x00, 0x00, 0x00, 0x00));
            while(1);
        }
        JS_FreeValue(ctx, res);
    } else {
        print_status("SHIM missing!", GS_SETREG_RGBAQ(0xFF, 0x00, 0x00, 0x00, 0x00));
        while(1);
    }

    // Stage 2: Vendors
    print_status("Load VENDORS...", GS_SETREG_RGBAQ(0x00, 0x00, 0x40, 0x00, 0x00));
    char* vendors_code = load_file_from_cd("VENDORS.JS");
    if (vendors_code) {
        print_status("Eval VENDORS...", GS_SETREG_RGBAQ(0x00, 0x00, 0x60, 0x00, 0x00));
        JSValue res = JS_Eval(ctx, vendors_code, strlen(vendors_code), "vendors.js", JS_EVAL_TYPE_GLOBAL);
        free(vendors_code);
        if (JS_IsException(res)) {
            print_status("VENDORS Error", GS_SETREG_RGBAQ(0xFF, 0x00, 0x00, 0x00, 0x00));
            while(1);
        }
        JS_FreeValue(ctx, res);
    } else {
        print_status("VENDORS missing!", GS_SETREG_RGBAQ(0xFF, 0x00, 0x00, 0x00, 0x00));
        while(1);
    }

    // Stage 3: Main
    print_status("Load MAIN...", GS_SETREG_RGBAQ(0x40, 0x40, 0x00, 0x00, 0x00));
    char* main_code = load_file_from_cd("MAIN.JS");
    if (main_code) {
        print_status("Eval MAIN...", GS_SETREG_RGBAQ(0x60, 0x60, 0x00, 0x00, 0x00));
        JSValue res = JS_Eval(ctx, main_code, strlen(main_code), "main.js", JS_EVAL_TYPE_GLOBAL);
        free(main_code);
        if (JS_IsException(res)) {
            print_status("MAIN Error", GS_SETREG_RGBAQ(0xFF, 0x00, 0x00, 0x00, 0x00));
            while(1);
        }
        JS_FreeValue(ctx, res);
    }

    print_status("Ready", GS_SETREG_RGBAQ(0x00, 0x00, 0x00, 0x00, 0x00));

    // Main Engine Loop
    int frame_counter = 0;
    while (1) {
        JSContext *ctx1;
        int err;

        // Run pending jobs (RAF, Timeouts, Promises)
        for (;;) {
            err = JS_ExecutePendingJob(rt, &ctx1);
            if (err <= 0) {
                if (err < 0) {
                    JSValue exception_val = JS_GetException(ctx1);
                    print_status("JS Runtime Exception!", GS_SETREG_RGBAQ(0xFF, 0x00, 0x00, 0x00, 0x00));
                    JS_FreeValue(ctx1, exception_val);
                    while(1);
                }
                break;
            }
        }

        // Periodic GC every 60 "ticks"
        if (++frame_counter >= 60) {
            JS_RunGC(rt);
            frame_counter = 0;
        }

        // Small hardware sync to prevent CPU/GPU hammering
        // This also gives the SIF/IOP time to process audio/pad
        // gsKit_sync_flip is usually enough if RAF is calling it,
        // but if the game hangs in a JS loop, this helps.
    }

    JS_FreeContext(ctx);
    JS_FreeRuntime(rt);
    return 0;
}
