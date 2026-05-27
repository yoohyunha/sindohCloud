import fs from "node:fs";
import path from "node:path";

const target = path.join(
  process.cwd(),
  "node_modules",
  "vite",
  "dist",
  "node",
  "chunks",
  "dep-Dq2t6Dq0.js"
);

if (!fs.existsSync(target)) {
  console.log("[patch-vite-windows] skipped: vite chunk not found");
  process.exit(0);
}

const source = fs.readFileSync(target, "utf8");
const pattern = /function optimizeSafeRealPathSync\(\) \{[\s\S]*?\n\}/;

if (!pattern.test(source)) {
  console.log("[patch-vite-windows] skipped: function block not found");
  process.exit(0);
}

const replacement = `function optimizeSafeRealPathSync() {
  safeRealpathSync = fs__default.realpathSync.native;
}
`;

const next = source.replace(pattern, replacement.trimEnd());

if (next === source) {
  console.log("[patch-vite-windows] already patched");
  process.exit(0);
}

fs.writeFileSync(target, next, "utf8");
console.log("[patch-vite-windows] applied");
