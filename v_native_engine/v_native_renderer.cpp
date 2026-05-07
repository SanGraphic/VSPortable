#include <vector>
#include <iostream>

/**
 * V-Native Batch Renderer
 * Groups sprites to minimize draw calls.
 */

struct Vertex {
    float x, y;
    float u, v;
    unsigned int color;
};

class BatchRenderer {
private:
    std::vector<Vertex> vertexBuffer;
    int maxSprites;
    int currentSprites;

public:
    BatchRenderer(int _maxSprites) : maxSprites(_maxSprites), currentSprites(0) {
        vertexBuffer.reserve(maxSprites * 6); // 6 vertices per quad
    }

    void addSprite(float x, float y, float w, float h, float u1, float v1, float u2, float v2, unsigned int color) {
        if (currentSprites >= maxSprites) flush();

        // Add 2 triangles (quad)
        vertexBuffer.push_back({x, y, u1, v1, color});
        vertexBuffer.push_back({x+w, y, u2, v1, color});
        vertexBuffer.push_back({x, y+h, u1, v2, color});

        vertexBuffer.push_back({x+w, y, u2, v1, color});
        vertexBuffer.push_back({x+w, y+h, u2, v2, color});
        vertexBuffer.push_back({x, y+h, u1, v2, color});

        currentSprites++;
    }

    void flush() {
        if (currentSprites == 0) return;
        
        // --- NATIVE DRAW CALL ---
        // On PC: glDrawArrays(GL_TRIANGLES, 0, vertexBuffer.size());
        // On PS2: gif_packet_send(vertexBuffer);
        
        std::cout << "[RENDERER] Flushed " << currentSprites << " sprites (" << vertexBuffer.size() << " vertices)\n";
        
        vertexBuffer.clear();
        currentSprites = 0;
    }
};
