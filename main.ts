import { mkdirSync, writeFileSync } from "node:fs";

// Draf v1 (ditolak):
//   "Earth is now called 'The Group Project' because 8 billion of us live here and somehow nobody does the work."
// Cacat v1: punchline kabur ("somehow nobody does the work" tanpa gambaran konkret),
// "of us" melemahkan lelucon, dan "is now called" bertele-tele sebelum leluconnya.
// Revisi v2 (final): nama + alasan bertumpu pada ciri khas Bumi (satu-satunya planet
// berpenghuni, 8 miliar manusia) dengan punchline konkret di akhir kalimat.

const line =
  "Earth is now 'The Group Project' — the only planet with 8 billion roommates and not one of them takes out the trash.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
console.log(`characters: ${line.length}`);
