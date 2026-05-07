#pragma once
#include <iostream>
#include <vector>
#include <string>

// V-Native Runtime Shim
// Maps JS-style types to C++

namespace v_native {
    class Object {
    public:
        // Generic object properties
    };
    
    class Sprite : public Object {
    public:
        float x, y;
        void setPosition(float _x, float _y) { x = _x; y = _y; }
    };
}
