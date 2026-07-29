import { ImageResponse } from "next/og";
import { OG_SUBLINE, SITE_URL } from "@/lib/site";
import {
	ARCHIVO_EXPANDED_SEMIBOLD,
	IBM_PLEX_MONO_REGULAR,
	IBM_PLEX_SANS_REGULAR,
	fontBytes,
} from "@/assets/fonts/embedded";

/** kevinmessali.com — the form you would read aloud, kept in sync with SITE_URL. */
const DOMAIN = SITE_URL.replace(/^https?:\/\/(www\.)?/, "");

export const config = { runtime: "edge" };

const PAPER = "#FBFAF7";
const INK = "#1A1A18";
const LEAD = "#6B6B62";
const RULE = "#DDDCD3";
const SIGNAL = "#E8502A";

const MODULE = 40;
const W = 1200;
const H = 630;

const DISPLAY = "Archivo Expanded";
const BODY = "IBM Plex Sans";
const MONO = "IBM Plex Mono";

/**
 * The card's three faces, matching the site.
 *
 * Static cuts, not the variable fonts the browser gets: Satori renders a variable
 * font at its default instance and ignores the axes, so handing it
 * `Archivo[wdth,wght].ttf` would give normal-width Archivo and the card would
 * quietly stop looking like the page. See scripts/build-og-fonts.mjs for how the
 * cuts are pinned and why they are embedded rather than read off disk.
 *
 * Decoded once at module scope, so the cost lands on cold start, not per request.
 */
const FACES = [
	{ name: DISPLAY, data: fontBytes(ARCHIVO_EXPANDED_SEMIBOLD), weight: 600 },
	{ name: BODY, data: fontBytes(IBM_PLEX_SANS_REGULAR), weight: 400 },
	{ name: MONO, data: fontBytes(IBM_PLEX_MONO_REGULAR), weight: 400 },
] as const;

/**
 * The bold 5mm rules of the sheet, as one SVG background rather than a stack of
 * absolutely positioned divs.
 *
 * The div version silently drew only half the grid: Satori laid out the 1px-wide
 * verticals but dropped every 1px-tall horizontal, so every shared link carried a
 * card ruled in one direction. A single background image never enters layout, so
 * there is nothing left to collapse.
 *
 * Coordinates are offset by half a pixel because a 1px stroke centred on an
 * integer straddles two device pixels and renders at half strength.
 */
const GRID_URL = (() => {
	const d = [
		...Array.from(
			{ length: Math.floor((W - 1) / MODULE) },
			(_, i) => `M${(i + 1) * MODULE + 0.5} 0V${H}`
		),
		...Array.from(
			{ length: Math.floor((H - 1) / MODULE) },
			(_, i) => `M0 ${(i + 1) * MODULE + 0.5}H${W}`
		),
	].join("");
	const svg =
		`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">` +
		`<path d="${d}" stroke="${SIGNAL}" stroke-opacity="0.07" stroke-width="1" fill="none"/>` +
		`</svg>`;
	return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
})();

export default async function handler() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					backgroundColor: PAPER,
					backgroundImage: GRID_URL,
					padding: 64,
					position: "relative",
					fontFamily: BODY,
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "baseline",
						borderBottom: `1px solid ${INK}`,
						paddingBottom: 16,
						color: INK,
						fontSize: 22,
						letterSpacing: 3,
					}}
				>
					<div style={{ fontFamily: DISPLAY, fontWeight: 600 }}>
						KEVIN MESSALI
					</div>
					<div style={{ fontFamily: MONO, color: LEAD, fontSize: 18 }}>
						PARIS, FR
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							fontFamily: DISPLAY,
							fontSize: 76,
							lineHeight: 1.05,
							fontWeight: 600,
							color: INK,
							letterSpacing: -1.5,
							maxWidth: 900,
						}}
					>
						Hi, I&apos;m Kevin.
					</div>
					<div
						style={{
							marginTop: 28,
							fontSize: 24,
							color: LEAD,
							maxWidth: 880,
							lineHeight: 1.45,
						}}
					>
						{OG_SUBLINE}
					</div>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "baseline",
						borderTop: `1px solid ${RULE}`,
						paddingTop: 16,
						fontSize: 18,
					}}
				>
					{/* One real thing, not invented sheet metadata. The card's job is
					    to say who this is and where to go. */}
					<div style={{ fontFamily: MONO, color: SIGNAL, letterSpacing: 1 }}>
						{DOMAIN}
					</div>
				</div>
			</div>
		),
		{
			width: W,
			height: H,
			fonts: FACES.map((f) => ({ ...f, style: "normal" as const })),
		}
	);
}
