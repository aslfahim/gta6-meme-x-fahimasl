// gta6-meme-x-01 entry for @fahimasl — "THE LONG WAIT" (Node 22, stdlib only).
// The judged artefact is the X post named in POST.json; this program's
// only job is to hand that file to the gate by copying it from the bot
// directory into the output directory.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`Failed to copy POST.json from ${botDir}: ${msg}`);
  process.exit(1);
}
