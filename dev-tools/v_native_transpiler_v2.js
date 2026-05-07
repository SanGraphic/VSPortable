const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

/**
 * V-Native Transpiler v2
 * Maps obfuscated Phaser JS to Native C++
 */

const PHASER_MAP = {
    'this.add.sprite': 'Engine::AddSprite',
    'this.physics.add.overlap': 'Engine::AddOverlap',
    'super.onBulletOverlapsEnemy': 'BaseWeapon::onBulletOverlapsEnemy',
    'indexOf': 'contains'
};

function transpile(code) {
    const ast = parser.parse(code, { sourceType: "module" });
    let cpp = "#include \"v_native_engine.h\"\n\n";

    traverse(ast, {
        ClassDeclaration(path) {
            const className = path.node.id.name;
            const superClass = path.node.superClass ? path.node.superClass.name : "BaseObject";
            cpp += `class ${className} : public ${superClass} {\npublic:\n`;
            
            path.traverse({
                ClassMethod(mPath) {
                    const name = mPath.node.key.name || mPath.node.key.value;
                    if (name === "constructor") {
                        cpp += `    ${className}(Scene* scene) : ${superClass}(scene) {\n`;
                    } else {
                        cpp += `    void ${name}() {\n`;
                    }
                    
                    // Simple logic lifting (pseudo-code translation)
                    mPath.traverse({
                        CallExpression(cPath) {
                            // Map Phaser calls
                            const callee = cPath.get("callee").toString();
                            if (PHASER_MAP[callee]) {
                                cpp += `        ${PHASER_MAP[callee]}(...);\n`;
                            }
                        }
                    });
                    
                    cpp += `    }\n`;
                }
            });
            cpp += "};\n";
        }
    });

    return cpp;
}

const input = fs.readFileSync(process.argv[2], 'utf8');
console.log(transpile(input));
