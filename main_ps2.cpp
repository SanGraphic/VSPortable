#include <stdio.h>
#include <malloc.h>
#include <kernel.h>
#include <sifrpc.h>
#include <gsKit.h>
#include <dmaKit.h>
#include <gsToolkit.h>

// QuickJS Library
#include "quickjs/quickjs.h"
#include "quickjs/quickjs-libc.h"

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
    snprintf(fullpath, sizeof(fullpath), "cdrom0:\\%s;1", filepath);
    
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

int main(int argc, char *argv[]) {
    SifInitRpc(0);

    // Initialize gsKit
    gsGlobal = gsKit_init_global();
    gsGlobal->PrimAlphaEnable = GS_SETTING_ON;
    dmaKit_init(D_CTRL_RELE_OFF, D_CTRL_MFD_OFF, D_CTRL_STS_UNSPEC, D_CTRL_STD_OFF, D_CTRL_RCYC_8, 1 << DMA_CHANNEL_GIF);
    dmaKit_chan_init(DMA_CHANNEL_GIF);
    gsKit_init_screen(gsGlobal);

    printf("[VS-PS2] Hardware initialized. Booting QuickJS Engine...\n");

    // Initialize QuickJS
    rt = JS_NewRuntime();
    // CRITICAL: Restrict memory usage to 20MB to prevent out-of-memory crashes on 32MB PS2
    JS_SetMemoryLimit(rt, 20 * 1024 * 1024); 
    
    ctx = JS_NewContext(rt);

    // Bind Native Functions
    JSValue global_obj = JS_GetGlobalObject(ctx);
    JS_SetPropertyStr(ctx, global_obj, "__draw", JS_NewCFunction(ctx, js_native_draw, "__draw", 1));
    
    // Bind console
    JSValue console = JS_NewObject(ctx);
    JS_SetPropertyStr(ctx, console, "log", JS_NewCFunction(ctx, js_console_log, "log", 1));
    JS_SetPropertyStr(ctx, global_obj, "console", console);
    
    JS_FreeValue(ctx, global_obj);

    printf("[VS-PS2] Loading JS Bundles from CD-ROM...\n");

    // Load JS shims and bundles
    // (In production, the shim string would be compiled in or loaded from a file)
    const char* shim_code = "var window = globalThis; window.setTimeout = function(cb,ms){ cb(); }; /* ...rest of shim... */";
    JS_Eval(ctx, shim_code, strlen(shim_code), "shim.js", JS_EVAL_TYPE_GLOBAL);

    char* vendors_code = load_file_from_cd("VENDORS.JS");
    if (vendors_code) {
        JS_Eval(ctx, vendors_code, strlen(vendors_code), "vendors.js", JS_EVAL_TYPE_GLOBAL);
        free(vendors_code);
    }

    char* main_code = load_file_from_cd("MAIN.JS");
    if (main_code) {
        JS_Eval(ctx, main_code, strlen(main_code), "main.js", JS_EVAL_TYPE_GLOBAL);
        free(main_code);
    }

    printf("[VS-PS2] Entering Main Event Loop...\n");

    // Main Engine Loop
    while (1) {
        JSContext *ctx1;
        int err;

        // Execute pending Promise/job callbacks
        for (;;) {
            err = JS_ExecutePendingJob(rt, &ctx1);
            if (err <= 0) {
                if (err < 0) {
                    // Dump JS Error
                    JSValue exception_val = JS_GetException(ctx1);
                    const char *str = JS_ToCString(ctx1, exception_val);
                    if (str) {
                        printf("[JS ERROR] %s\n", str);
                        JS_FreeCString(ctx1, str);
                    }
                    JS_FreeValue(ctx1, exception_val);
                }
                break;
            }
        }
        
        // Let gsKit flip if we didn't receive a FLIP command natively
        // Normally handled by requestAnimationFrame firing `__draw('FLIP')`
    }

    JS_FreeContext(ctx);
    JS_FreeRuntime(rt);
    return 0;
}
