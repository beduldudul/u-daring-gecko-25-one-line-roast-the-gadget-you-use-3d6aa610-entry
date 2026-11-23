// One-Line Roast: The Gadget You Use Every Day
// Roast: my phone's battery only holds a charge when nobody is watching.
import { mkdirSync, writeFileSync } from "node:fs";

// The roast targets one daily gadget (the phone) with a concrete,
// specific gripe: it only drains fast the moment you actually use it.
const line =
  "My phone's battery lasts all day if I never touch it, but the moment I open maps it drops 30% — it only holds a charge when nobody's watching.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
