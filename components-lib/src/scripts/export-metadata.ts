import { writeFileSync } from "fs";
import { componentMetadata } from "../metadata";

writeFileSync(
  "dist/component-metadata.json",
  JSON.stringify(componentMetadata, null, 2)
);
