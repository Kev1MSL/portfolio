/**
 * Rebuilds assets/fonts/embedded.ts from the .ttf files beside it.
 *
 * The OG card needs static font cuts. Satori renders a variable font at its
 * default instance and ignores the axes, so handing it Archivo[wdth,wght].ttf
 * gives normal-width Archivo and the card quietly stops matching the site. The
 * .ttf files here were produced with fontTools:
 *
 *   instancer.instantiateVariableFont(font, {"wdth": 118, "wght": 600})   # Archivo
 *   instancer.instantiateVariableFont(font, {"wdth": 100, "wght": 400})   # Plex Sans
 *
 * pinned to the axes globals.css asks for, then subset to Latin-1 plus the
 * punctuation real copy uses (deliberately wider than the current strings, so
 * editing lib/site.ts cannot produce tofu boxes).
 *
 *   node scripts/build-og-fonts.mjs
 */

import { readFileSync, writeFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const FONT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "fonts");

const FACES = [
	["ArchivoExpanded-SemiBold", "ARCHIVO_EXPANDED_SEMIBOLD"],
	["IBMPlexSans-Regular", "IBM_PLEX_SANS_REGULAR"],
	["IBMPlexMono-Regular", "IBM_PLEX_MONO_REGULAR"],
];

let out = `/* eslint-disable */
/**
 * GENERATED FILE — do not edit by hand.
 *
 * The three static font cuts the OG card needs, base64-encoded into the bundle.
 *
 * They are embedded rather than read from disk because neither alternative is
 * reliable: \`fetch(new URL(..., import.meta.url))\` gets a file:// URL that the
 * edge runtime cannot fetch, and \`fs.readFileSync\` needs Vercel's file tracing
 * configured by hand or the fonts silently vanish in production — which would
 * fall back to a system sans, and nobody would notice until a link was shared.
 * Embedded bytes cannot go missing.
 *
 * Regenerate with scripts/build-og-fonts.mjs after changing any font.
 */

`;

for (const [file, id] of FACES) {
	const b64 = readFileSync(join(FONT_DIR, `${file}.ttf`)).toString("base64");
	out += `/** ${file}.ttf */\nexport const ${id} =\n\t"${b64}";\n\n`;
}

out += `/**
 * base64 -> bytes, using only what both runtimes provide.
 *
 * Returns the ArrayBuffer rather than the view: ImageResponse's FontOptions.data
 * accepts \`ArrayBuffer | Buffer\`, and a Uint8Array is neither. The buffer is
 * exactly the right length because it was allocated for this string.
 */
export function fontBytes(b64: string): ArrayBuffer {
\tconst bin = atob(b64);
\tconst bytes = new Uint8Array(bin.length);
\tfor (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
\treturn bytes.buffer;
}
`;

const target = join(FONT_DIR, "embedded.ts");
writeFileSync(target, out);
console.log(
	`embedded.ts written: ${(statSync(target).size / 1024).toFixed(0)}KB from ${FACES.length} faces`
);
