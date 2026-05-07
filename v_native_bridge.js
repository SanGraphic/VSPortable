/**
 * V-Native Bridge: The Performance Injector
 * This script runs BEFORE the main game bundle.
 * It overrides Phaser's heavy methods with C++ Native calls.
 */

// 1. Browser Stubs
window = globalThis;
document = {
    createElement: () => ({ getContext: () => ({}) }),
    getElementById: () => null,
    location: { href: '' }
};

// 2. Phaser Performance Override
const OriginalPhaser = Phaser;
Phaser = {
    ...OriginalPhaser,
    Physics: {
        ...OriginalPhaser.Physics,
        Arcade: {
            ...OriginalPhaser.Physics.Arcade,
            World: class extends OriginalPhaser.Physics.Arcade.World {
                update(time, delta) {
                    // INSTEAD of JS physics, we call the C++ Native Spatial Hash
                    if (globalThis.NativeEngine) {
                        globalThis.NativeEngine.updatePhysics(delta);
                    } else {
                        super.update(time, delta);
                    }
                }
            }
        }
    }
};

// 3. Native Engine Bridge
console.log("[V-Native] Bridge Active. Intercepting Phaser Physics...");
