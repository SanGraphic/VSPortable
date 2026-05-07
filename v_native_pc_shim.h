#pragma once
#include <windows.h>
#include <vector>
#include <iostream>

// PS2 to PC (Win32) Shim
// Allows trying PS2 main.cpp on Windows

typedef unsigned long long u64;
#define GS_SETREG_RGBAQ(r,g,b,a,q) ((u64)(r) | (u64)(g)<<8 | (u64)(b)<<16 | (u64)(a)<<24)

struct GSGLOBAL {
    int Width, Height;
    // ...
};

void dmaKit_init(...) {}
void dmaKit_chan_init(...) {}
GSGLOBAL* gsKit_init_global() { return new GSGLOBAL{640, 448}; }
void gsKit_init_screen(GSGLOBAL*) {
    std::cout << "[PC SHIM] Screen Initialized (640x448)\n";
}
void gsKit_mode_switch(GSGLOBAL*, int) {}
void gsKit_clear(GSGLOBAL*, u64) {}
void gsKit_sync_flip(GSGLOBAL*) {}
void gsKit_queue_exec(GSGLOBAL*) {}

void gsKit_prim_sprite(GSGLOBAL*, float x1, float y1, float x2, float y2, int z, u64 color) {
    // On PC, we just simulate the work
}

#define GS_MODE_NTSC 0
#define GS_INTERLACE_INTERLACED 0
#define GS_FIELD_FRAME 0
#define GS_PSM_CT32 0
#define GS_SETTING_ON 1
#define GS_SETTING_OFF 0
#define GS_ONESHOT 0
