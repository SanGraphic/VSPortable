#include <vector>
#include <unordered_map>
#include <cmath>

/**
 * V-Native Spatial Hash
 * Drastically reduces collision overhead for thousands of entities.
 * Unity-level optimization for Survivors-likes.
 */

struct Entity {
    int id;
    float x, y;
    float radius;
};

class SpatialHash {
private:
    float cellSize;
    std::unordered_map<long long, std::vector<Entity*>> grid;

    long long hashKey(float x, float y) {
        long long ix = (long long)std::floor(x / cellSize);
        long long iy = (long long)std::floor(y / cellSize);
        return (ix << 32) | (iy & 0xFFFFFFFF);
    }

public:
    SpatialHash(float _cellSize) : cellSize(_cellSize) {}

    void clear() {
        grid.clear();
    }

    void insert(Entity* e) {
        grid[hashKey(e->x, e->y)].push_back(e);
    }

    void query(float x, float y, float radius, std::vector<Entity*>& results) {
        int xMin = (int)std::floor((x - radius) / cellSize);
        int xMax = (int)std::floor((x + radius) / cellSize);
        int yMin = (int)std::floor((y - radius) / cellSize);
        int yMax = (int)std::floor((y + radius) / cellSize);

        for (int ix = xMin; ix <= xMax; ++ix) {
            for (int iy = yMin; iy <= yMax; ++iy) {
                long long key = ((long long)ix << 32) | (iy & 0xFFFFFFFF);
                if (grid.count(key)) {
                    for (auto* e : grid[key]) {
                        results.push_back(e);
                    }
                }
            }
        }
    }
};
