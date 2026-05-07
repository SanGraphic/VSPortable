#include <windows.h>
#include <iostream>
#include <vector>
#include <fcntl.h>
#include <io.h>

/**
 * V-Native High-Speed Renderer
 * Reads sprite data from STDIN and draws them instantly.
 */

struct SpriteData {
    float x, y;
    int frame;
};

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wp, LPARAM lp) {
    if (msg == WM_DESTROY) { PostQuitMessage(0); return 0; }
    return DefWindowProc(hwnd, msg, wp, lp);
}

int main() {
    // Set STDIN to binary mode
    _setmode(_fileno(stdin), _O_BINARY);

    WNDCLASS wc = {0};
    wc.lpfnWndProc = WndProc;
    wc.lpszClassName = "VSportRenderer";
    RegisterClass(&wc);
    HWND hwnd = CreateWindow("VSportRenderer", "V-Native Extreme Renderer", WS_OVERLAPPEDWINDOW | WS_VISIBLE, 100, 100, 800, 600, 0, 0, 0, 0);
    HDC hdc = GetDC(hwnd);

    std::vector<SpriteData> sprites;
    int count;

    while(true) {
        // 1. Read sprite count
        if (fread(&count, sizeof(int), 1, stdin) != 1) break;
        
        // 2. Read sprite data
        sprites.resize(count);
        if (fread(sprites.data(), sizeof(SpriteData), count, stdin) != count) break;

        // 3. Batch Render (GDI for demo, OpenGL for real)
        // For speed, we just draw dots
        for(auto& s : sprites) {
            SetPixel(hdc, (int)s.x, (int)s.y, RGB(255, 50, 50));
        }

        // Process messages
        MSG msg;
        while(PeekMessage(&msg, 0, 0, 0, PM_REMOVE)) {
            if(msg.message == WM_QUIT) return 0;
            TranslateMessage(&msg);
            DispatchMessage(&msg);
        }
    }
    return 0;
}
