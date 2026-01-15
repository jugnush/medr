import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { componentMetadata } from "./metadata.js";

// ESM-safe __dirname replacement
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve dist path correctly
const outputPath = path.resolve(
  __dirname,
  "../dist/component-metadata.json"
);

writeFileSync(
  outputPath,
  JSON.stringify(componentMetadata, null, 2),
  "utf-8"
);

console.log("component-metadata.json written to:", outputPath);
