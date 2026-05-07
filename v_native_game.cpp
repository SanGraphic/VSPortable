#include <windows.h>
#include <vector>
#include <iostream>
#include <cmath>
#include "v_native_engine/v_spatial_hash.cpp"
#include "characters_data.h"

/**
 * VSport Native - FULL GAME CORE
 * Pixel-perfect native rendering + Transpiled Logic
 */

struct Sprite {
    float x, y;
    int frame;
};

// --- Game State ---
Sprite player = {400, 300, 0};
std::vector<Entity> mobs;
SpatialHash gameHash(32.0f);

// --- Graphics Engine ---
BITMAPINFO bmi;
void InitGraphics() {
    bmi.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    bmi.bmiHeader.biWidth = SPRITE_WIDTH;
    bmi.bmiHeader.biHeight = -SPRITE_HEIGHT; // Top-down
    bmi.bmiHeader.biPlanes = 1;
    bmi.bmiHeader.biBitCount = 32;
    bmi.bmiHeader.biCompression = BI_RGB;
}

void DrawSprite(HDC hdc, int sx, int sy, int frameX, int frameY, int width, int height) {
    // Draw a slice of the characters sheet
    // For simplicity, we just draw the whole sheet for now to test
    SetDIBitsToDevice(hdc, sx, sy, SPRITE_WIDTH, SPRITE_HEIGHT, 
                      0, 0, 0, SPRITE_HEIGHT, sprite_data, &bmi, DIB_RGB_COLORS);
}

void UpdateGame() {
    gameHash.clear();
    for(auto& m : mobs) {
        if (m.x < -1000) continue;
        float dx = player.x - m.x;
        float dy = player.y - m.y;
        float d = sqrt(dx*dx + dy*dy);
        if (d > 1.0f) { m.x += dx/d * 0.8f; m.y += dy/d * 0.8f; }
        gameHash.insert(&m);
    }
}

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wp, LPARAM lp) {
    if (msg == WM_PAINT) {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hwnd, &ps);
        
        // Draw the full character sheet as proof of asset loading
        DrawSprite(hdc, 0, 0, 0, 0, 0, 0);

        // Draw mobs as red dots on top
        HBRUSH eBrush = CreateSolidBrush(RGB(255, 50, 50));
        SelectObject(hdc, eBrush);
        for(auto& m : mobs) {
            if (m.x < -1000) continue;
            Rectangle(hdc, m.x-2, m.y-2, m.x+2, m.y+2);
        }
        DeleteObject(eBrush);

        EndPaint(hwnd, &ps);
        return 0;
    }
    if (msg == WM_DESTROY) { PostQuitMessage(0); return 0; }
    return DefWindowProc(hwnd, msg, wp, lp);
}

int main() {
    InitGraphics();
    for(int i = 0; i < 2000; ++i) {
        mobs.push_back({1000+i, (float)(rand()%800), (float)(rand()%600), 2.0f});
    }

    WNDCLASS wc = {0};
    wc.lpfnWndProc = WndProc;
    wc.lpszClassName = "VSportFull";
    RegisterClass(&wc);
    HWND hwnd = CreateWindow("VSportFull", "VSport Native - FULL GAME ASSETS LOADED", WS_OVERLAPPEDWINDOW | WS_VISIBLE, 100, 100, 800, 600, 0, 0, 0, 0);

    MSG msg;
    while(true) {
        if(PeekMessage(&msg, 0, 0, 0, PM_REMOVE)) {
            if(msg.message == WM_QUIT) break;
            TranslateMessage(&msg);
            DispatchMessage(&msg);
        } else {
            UpdateGame();
            InvalidateRect(hwnd, 0, FALSE);
            Sleep(16);
        }
    }
    return 0;
}
