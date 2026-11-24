import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const STORY =
  "I count the stairs to my flat every night \u2014 seventeen \u2014 because the stairwell light has been broken for a month. Tonight there were eighteen, and the extra one was warm under my foot.";

function fail(message: string): never {
  throw new Error(message);
}

const chars = [...STORY].length;
if (chars < 1 || chars > 400) {
  fail(`story is ${chars} characters, must be 1-400`);
}
if (STORY !== STORY.trim()) {
  fail("story has leading or trailing whitespace");
}
if (STORY.includes("  ")) {
  fail("story has doubled spaces");
}
if (STORY.includes("\n")) {
  fail("story must be a single paragraph");
}
const terminators = STORY.match(/[.!?]/g) ?? [];
if (terminators.length !== 2) {
  fail(`story has ${terminators.length} sentence terminators, must be exactly 2`);
}
if (!/[.!?]$/.test(STORY)) {
  fail("story must end with sentence punctuation");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== STORY) {
  fail("read-back mismatch");
}
console.log(`wrote ${chars} characters to /output/entry.txt`);
