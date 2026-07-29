/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				display: [
					"var(--font-display)",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				],
				sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
				mono: [
					"var(--font-mono)",
					"ui-monospace",
					"SFMono-Regular",
					"Menlo",
					"monospace",
				],
			},
			colors: {
				// The drafting sheet.
				paper: "#FBFAF7",
				desk: "#F1EFE9",
				ink: "#1A1A18",
				lead: "#6B6B62",
				rule: "#DDDCD3",
				signal: "#E8502A", // graphic marks only — grid, markers, badges
				signalInk: "#B83A15", // text links and hover; ~5.5:1 on paper
			},
		},
	},
	plugins: [],
};
