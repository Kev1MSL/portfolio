import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/**
 * Three roles, one reason each.
 *
 * Archivo carries the `wdth` axis, so headings can be set expanded — a stamped
 * drawing title rather than another bold grotesque.
 * Plex Sans was drawn for technical documentation; it is narrower and warmer
 * than Archivo, which is where the width contrast comes from.
 * Plex Mono holds anything that is data: years, patent numbers, the title block.
 */
export const display = Archivo({
	subsets: ["latin"],
	axes: ["wdth"],
	variable: "--font-display",
	display: "swap",
});

export const body = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-body",
	display: "swap",
});

export const mono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-mono",
	display: "swap",
});

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;
