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
    JS_SetMaxStackSize(rt, 512 * 1024); // 512KB stack
    
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

    auto safe_eval = [&](const char* code, const char* name, uint64_t load_color, uint64_t eval_color) {
        char buf[128];
        snprintf(buf, sizeof(buf), "Loading %s...", name);
        print_status(buf, load_color);

        char* source = load_file_from_cd(code);
        if (!source) {
            snprintf(buf, sizeof(buf), "Error: %s not found", code);
            print_status(buf, GS_SETREG_RGBAQ(0xFF, 0x00, 0x00, 0x00, 0x00));
            while(1);
        }

        snprintf(buf, sizeof(buf), "Eval %s...", name);
        print_status(buf, eval_color);
        
        JSValue res = JS_Eval(ctx, source, strlen(source), name, JS_EVAL_TYPE_GLOBAL);
        free(source);

        if (JS_IsException(res)) {
            JSValue exp = JS_GetException(ctx);
            const char* msg = JS_ToCString(ctx, exp);
            char err_buf[512];
            snprintf(err_buf, sizeof(err_buf), "%s Error: %s", name, msg ? msg : "unknown");
            print_status(err_buf, GS_SETREG_RGBAQ(0xFF, 0x00, 0x00, 0x00, 0x00));
            JS_FreeCString(ctx, msg);
            JS_FreeValue(ctx, exp);
            while(1);
        }
        JS_FreeValue(ctx, res);
    };

    // Load JS Bundles
    safe_eval("SHIM.JS", "Shim", GS_SETREG_RGBAQ(0x00, 0x40, 0x00, 0x00, 0x00), GS_SETREG_RGBAQ(0x00, 0x60, 0x00, 0x00, 0x00));
    safe_eval("VENDORS.JS", "Vendors", GS_SETREG_RGBAQ(0x00, 0x00, 0x40, 0x00, 0x00), GS_SETREG_RGBAQ(0x00, 0x00, 0x60, 0x00, 0x00));
    safe_eval("MAIN.JS", "Main", GS_SETREG_RGBAQ(0x40, 0x40, 0x00, 0x00, 0x00), GS_SETREG_RGBAQ(0x60, 0x60, 0x00, 0x00, 0x00));

    print_status("Game Active", GS_SETREG_RGBAQ(0x00, 0x00, 0x00, 0x00, 0x00));

    // Main Engine Loop
    while (1) {
        JSContext *ctx1;
        int err;

        for (;;) {
            err = JS_ExecutePendingJob(rt, &ctx1);
            if (err <= 0) {
                if (err < 0) {
                    JSValue exception_val = JS_GetException(ctx1);
                    const char *str = JS_ToCString(ctx1, exception_val);
                    if (str) {
                        char err_buf[512];
                        snprintf(err_buf, sizeof(err_buf), "Exception: %s", str);
                        print_status(err_buf);
                        JS_FreeCString(ctx1, str);
                    }
                    JS_FreeValue(ctx1, exception_val);
                    while(1);
                }
                break;
            }
        }
    }

    JS_FreeContext(ctx);
    JS_FreeRuntime(rt);
    return 0;
}
