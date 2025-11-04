// scanInvalidTokens.js
// This scans your /src/components folder for hidden or invalid tokens.

import fs from "fs";
import path from "path";

const ROOT = path.join(process.cwd(), "src", "components");
const INVALID_PATTERN = /[\uFFFD\u200B\u200E\u200F\uFEFF]/; // Invisible unicode, BOM, etc.

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      const content = fs.readFileSync(fullPath, "utf8");

      // Look for invalid Unicode or unprintable characters
      if (INVALID_PATTERN.test(content)) {
        console.log(`⚠️  Possible invalid character in: ${fullPath}`);
      }

      // Optional: Try parsing as JS
      try {
        new Function(content);
      } catch (e) {
        console.log(`❌ Syntax error in: ${fullPath}`);
        console.log(`   → ${e.message}`);
      }
    }
  }
}

console.log("🔍 Scanning src/components for invalid tokens...\n");
scanDir(ROOT);
console.log("\n✅ Scan complete!");
