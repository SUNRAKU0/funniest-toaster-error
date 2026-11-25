// Toaster error entry: writes one error message to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'Error: this bagel has been toasted before. I will not do it twice.';

mkdirSync(outDir, { recursive: true });
// The bagel refuses to be toasted twice, so the error just needs somewhere to sit.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
