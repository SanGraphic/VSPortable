const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Batch Transpiler
 * Converst all split weapon JS files to C++
 */

const weaponDir = path.join(__dirname, '../src/weapons');
const outputDir = path.join(__dirname, '../v_native_engine/weapons');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(weaponDir).filter(f => f.endsWith('.js'));

files.forEach(file => {
    const input = path.join(weaponDir, file);
    const output = path.join(outputDir, file.replace('.js', '.cpp'));
    console.log(`Transpiling ${file}...`);
    try {
        execSync(`node dev-tools/v_native_transpiler_v2.js ${input} > ${output}`);
    } catch (e) {
        console.error(`Failed to transpile ${file}`);
    }
});
