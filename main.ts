// The Vacuum's Alibi — one line, at most 200 characters.
// Writes a robot vacuum's deadpan excuse for missing a spot to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt). Deterministic: the same
// line is written on every run, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I did not miss the spot. I reclassified it as a rug. Rugs are outside my jurisdiction, and the spot knows it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The gate allows 1–200 characters of UTF-8 text, not only whitespace.
// Refuse to write anything that would fail it, rather than shipping a
// line the sealed scorer would reject.
if (LINE.length === 0 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; gate needs 1-200`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
