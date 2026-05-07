/**
 * v_window.cpp — V-Native Display Window
 * Reads draw commands from stdin, renders them via Win32 GDI.
 */
#include <windows.h>
#include <stdio.h>
#include <string.h>
#include <thread>
#include <mutex>
#include <vector>
#include <map>

#define STB_IMAGE_IMPLEMENTATION
#include "stb_image.h"

#define W 960
#define H 540

#pragma comment(lib, "msimg32.lib")

struct Cmd { 
    char type; 
    int x,y,w,h,r,g,b; 
    int id, sx, sy, sw, sh;
    char path[512];
};

struct Sprite {
    int w, h;
    HBITMAP hbm;
};

static std::vector<Cmd> queue;
static std::mutex mtx;
static HWND hwnd;
static HDC memDC;
static HBITMAP memBM;
static HDC spriteDC;
static std::map<int, Sprite> sprites;

void ReadCommands() {
    HANDLE hIn = GetStdHandle(STD_INPUT_HANDLE);
    char buf[1024];
    char line[1024];
    int lineLen = 0;
    DWORD bytesRead;
    while (ReadFile(hIn, buf, sizeof(buf)-1, &bytesRead, NULL) && bytesRead > 0) {
        for (DWORD i = 0; i < bytesRead; i++) {
            char ch = buf[i];
            if (ch == '\n' || ch == '\r') {
                if (lineLen > 0) {
                    line[lineLen] = 0;
                    Cmd c = {};
                    if (strncmp(line,"CLEAR",5)==0) {
                        c.type='C';
                    } else if (sscanf(line,"FILL %d %d %d %d %d %d %d",&c.x,&c.y,&c.w,&c.h,&c.r,&c.g,&c.b)==7) {
                        c.type='F';
                    } else if (strncmp(line,"FLIP",4)==0) {
                        c.type='P';
                    } else if (strncmp(line,"LOAD",4)==0) {
                        if (sscanf(line,"LOAD %d %s", &c.id, c.path) == 2) {
                            c.type='L';
                        }
                    } else if (strncmp(line,"BLIT",4)==0) {
                        if (sscanf(line,"BLIT %d %d %d %d %d %d %d %d %d", &c.id, &c.sx, &c.sy, &c.sw, &c.sh, &c.x, &c.y, &c.w, &c.h) == 9) {
                            c.type='B';
                        }
                    }
                    if (c.type) {
                        { std::lock_guard<std::mutex> lk(mtx); queue.push_back(c); }
                        if (c.type=='P') PostMessage(hwnd, WM_USER+1, 0, 0);
                    }
                    lineLen = 0;
                }
            } else if (lineLen < 1023) {
                line[lineLen++] = ch;
            }
        }
    }
}

LRESULT CALLBACK WndProc(HWND h, UINT msg, WPARAM wp, LPARAM lp) {
    if (msg == WM_CREATE) {
        HDC hdc = GetDC(h);
        memDC = CreateCompatibleDC(hdc);
        spriteDC = CreateCompatibleDC(hdc);
        memBM = CreateCompatibleBitmap(hdc, W, H);
        SelectObject(memDC, memBM);
        ReleaseDC(h, hdc);
        HBRUSH b = CreateSolidBrush(RGB(0,0,0));
        RECT r = {0,0,W,H}; FillRect(memDC, &r, b); DeleteObject(b);
        return 0;
    }
    if (msg == WM_USER+1 || msg == WM_PAINT) {
        std::vector<Cmd> local;
        { std::lock_guard<std::mutex> lk(mtx); local.swap(queue); }
        for (auto& c : local) {
            if (c.type=='C') {
                HBRUSH b = CreateSolidBrush(RGB(0,0,0));
                RECT r = {0,0,W,H}; FillRect(memDC, &r, b); DeleteObject(b);
            } else if (c.type=='F') {
                HBRUSH b = CreateSolidBrush(RGB(c.r,c.g,c.b));
                RECT r = {c.x,c.y,c.x+c.w,c.y+c.h}; FillRect(memDC, &r, b); DeleteObject(b);
            } else if (c.type=='L') {
                int w, h, ch;
                unsigned char* pixels = stbi_load(c.path, &w, &h, &ch, 4);
                if (pixels) {
                    for (int i=0; i<w*h*4; i+=4) {
                        unsigned char r=pixels[i], g=pixels[i+1], b=pixels[i+2], a=pixels[i+3];
                        pixels[i]   = (b * a) / 255;
                        pixels[i+1] = (g * a) / 255;
                        pixels[i+2] = (r * a) / 255;
                        pixels[i+3] = a;
                    }
                    HBITMAP hbm = CreateBitmap(w, h, 1, 32, pixels);
                    stbi_image_free(pixels);
                    if (hbm) sprites[c.id] = {w, h, hbm};
                }
            } else if (c.type=='B') {
                auto it = sprites.find(c.id);
                if (it != sprites.end()) {
                    HGDIOBJ old = SelectObject(spriteDC, it->second.hbm);
                    BLENDFUNCTION bf = {AC_SRC_OVER, 0, 255, AC_SRC_ALPHA};
                    AlphaBlend(memDC, c.x, c.y, c.w, c.h, spriteDC, c.sx, c.sy, c.sw, c.sh, bf);
                    SelectObject(spriteDC, old);
                }
            }
        }
        PAINTSTRUCT ps;
        HDC hdc = (msg==WM_PAINT) ? BeginPaint(h,&ps) : GetDC(h);
        BitBlt(hdc, 0,0,W,H, memDC, 0,0, SRCCOPY);
        if (msg==WM_PAINT) EndPaint(h,&ps); else ReleaseDC(h,hdc);
        return 0;
    }
    if (msg==WM_DESTROY) { PostQuitMessage(0); return 0; }
    return DefWindowProc(h,msg,wp,lp);
}

int WINAPI WinMain(HINSTANCE hi, HINSTANCE, LPSTR, int) {
    WNDCLASS wc = {};
    wc.lpfnWndProc = WndProc;
    wc.hInstance = hi;
    wc.lpszClassName = "VNative";
    wc.hbrBackground = (HBRUSH)GetStockObject(BLACK_BRUSH);
    wc.hCursor = LoadCursor(NULL, IDC_ARROW);
    RegisterClass(&wc);

    hwnd = CreateWindow("VNative","Vampire Survivors — V-Native",
        WS_OVERLAPPEDWINDOW|WS_VISIBLE,
        100,100,W,H, NULL,NULL,hi,NULL);

    std::thread reader(ReadCommands);
    reader.detach();

    MSG msg;
    while (GetMessage(&msg,NULL,0,0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    return 0;
}

