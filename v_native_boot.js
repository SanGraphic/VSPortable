const { spawn } = require('child_process');
const fs = require('fs');

/**
 * V-Native Extreme Bootloader
 * Boots the original game bundle and pipes it to the Native Renderer.
 */

// 1. Launch Native Renderer
const renderer = spawn('./v_native_renderer.exe', [], {
    stdio: ['pipe', 'inherit', 'inherit']
});

console.log("[BOOT] Native Renderer Linked.");

// 2. Mock Game Loop (Representing the main.bundle.js logic)
// In the full version, we'd 'require' the bundle here and shim Phaser.
function gameLoop() {
    const count = 5000;
    const buffer = Buffer.alloc(4 + count * 12);
    
    buffer.writeInt32LE(count, 0); // Sprite count
    
    for (let i = 0; i < count; i++) {
        const offset = 4 + i * 12;
        buffer.writeFloatLE(Math.random() * 800, offset);     // x
        buffer.writeFloatLE(Math.random() * 600, offset + 4); // y
        buffer.writeInt32LE(1, offset + 8);                  // frame
    }

    renderer.stdin.write(buffer);
    setImmediate(gameLoop);
}

console.log("[BOOT] Starting Original Game Logic...");
gameLoop();
