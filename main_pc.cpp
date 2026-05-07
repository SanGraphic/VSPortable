#include <windows.h>
#include <vector>
#include <chrono>
#include <iostream>
#include "v_native_engine/v_spatial_hash.cpp"

/**
 * VSport Native - PC Visual Proof
 * Uses Win32 GDI to show 10,000 entities running smoothly.
 */

const int ENTITY_COUNT = 10000;
SpatialHash spatialHash(32.0f);
std::vector<Entity> entities(ENTITY_COUNT);

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
        case WM_PAINT: {
            PAINTSTRUCT ps;
            HDC hdc = BeginPaint(hwnd, &ps);
            
            // Fill background
            FillRect(hdc, &ps.rcPaint, (HBRUSH)(COLOR_WINDOW + 1));

            // Move entities
            for(auto& e : entities) {
                e.x += (rand() % 3 - 1);
                e.y += (rand() % 3 - 1);
            }

            // Draw entities using GDI
            HBRUSH brush = CreateSolidBrush(RGB(255, 0, 0));
            SelectObject(hdc, brush);
            for(auto& e : entities) {
                Rectangle(hdc, e.x, e.y, e.x + 4, e.y + 4);
            }
            DeleteObject(brush);

            EndPaint(hwnd, &ps);
            return 0;
        }
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
    }
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

int main() {
    // Init entities
    for(int i = 0; i < ENTITY_COUNT; ++i) {
        entities[i] = {i, (float)(rand() % 800), (float)(rand() % 600), 4.0f};
    }

    // Win32 Boilerplate
    HINSTANCE hInstance = GetModuleHandle(NULL);
    WNDCLASS wc = {};
    wc.lpfnWndProc = WindowProc;
    wc.hInstance = hInstance;
    wc.lpszClassName = "VSportNativeClass";
    RegisterClass(&wc);

    HWND hwnd = CreateWindowEx(0, "VSportNativeClass", "VSport Native - 10,000 Entity Proof", 
                               WS_OVERLAPPEDWINDOW | WS_VISIBLE, CW_USEDEFAULT, CW_USEDEFAULT, 800, 600, 
                               NULL, NULL, hInstance, NULL);

    if (hwnd == NULL) return 0;

    std::cout << "Starting Visual Demo: 10,000 Entities Native...\n";

    MSG msg = {};
    while (msg.message != WM_QUIT) {
        if (PeekMessage(&msg, NULL, 0, 0, PM_REMOVE)) {
            TranslateMessage(&msg);
            DispatchMessage(&msg);
        } else {
            InvalidateRect(hwnd, NULL, FALSE); // Force redraw for animation
            Sleep(1); // Cap CPU
        }
    }

    return 0;
}
