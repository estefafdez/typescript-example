const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) {
  console.error('Usage: npm run example -- "Primeros Pasos TS/primer_programa.ts"');
  process.exit(1);
}
const file = path.resolve(root, 'dist', input.replace(/\.ts$/, '.js'));
if (!file.startsWith(path.join(root, 'dist') + path.sep) || !fs.existsSync(file)) {
  console.error('Example not found. Run npm run build first and pass its .ts path.');
  process.exit(1);
}
const result = spawnSync(process.execPath, [file], { stdio: 'inherit' });
process.exit(result.status ?? 1);
