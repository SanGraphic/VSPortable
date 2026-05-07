#include <gsKit.h>
#include <dmaKit.h>
#include "v_native_engine/v_spatial_hash.cpp"

/**
 * VSport Native PS2 Entry Point
 */

GSGLOBAL *gsGlobal;

int main(int argc, char *argv[]) {
    // 1. Initialize DMA and Graphics
    dmaKit_init(D_CTRL_RELE_OFF, D_CTRL_MFD_OFF, D_CTRL_STS_UNSPEC,
                D_CTRL_STD_OFF, D_CTRL_RCYC_8, 128);
    dmaKit_chan_init(DMA_CHANNEL_GIF);

    gsGlobal = gsKit_init_global();
    gsGlobal->Mode = GS_MODE_NTSC;
    gsGlobal->Interlace = GS_INTERLACE_INTERLACED;
    gsGlobal->Field = GS_FIELD_FRAME;
    gsGlobal->Width = 640;
    gsGlobal->Height = 448;
    gsGlobal->PSM = GS_PSM_CT32;
    gsGlobal->DoubleBuffering = GS_SETTING_ON;
    gsGlobal->ZBuffering = GS_SETTING_OFF;

    gsKit_init_screen(gsGlobal);
    gsKit_mode_switch(gsGlobal, GS_ONESHOT);

    // 2. Initialize V-Native Systems
    SpatialHash spatialHash(32.0f);
    
    // 3. Main Loop
    u64 black = GS_SETREG_RGBAQ(0x00, 0x00, 0x00, 0x80, 0x00);
    u64 white = GS_SETREG_RGBAQ(0xFF, 0xFF, 0xFF, 0x80, 0x00);

    while(1) {
        gsKit_clear(gsGlobal, black);

        // Render simple splash text (pseudo-code, gsKit font needed)
        // gsKit_font_print(gsGlobal, font, 100, 100, 1, white, "VSPORT NATIVE - PS2");

        // Simple performance test: render 1000 white squares
        for(int i = 0; i < 1000; ++i) {
            float x = 100 + (i % 32) * 10;
            float y = 100 + (i / 32) * 10;
            gsKit_prim_sprite(gsGlobal, x, y, x + 8, y + 8, 1, white);
        }

        gsKit_sync_flip(gsGlobal);
        gsKit_queue_exec(gsGlobal);
    }

    return 0;
}
