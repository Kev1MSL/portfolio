/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundColor: "#202040",
			textColor: "#f3f3ff",
			fontFamily: {
				display: ["Satoshi-Variable", "sans-serif"],
			},
			colors: {
				transparent: "transparent",
				primary: "#B030B0",
				primaryHover: "#8B008B",
				secondary: "#602080",
				container: "#272775",
				containerSecondary: "#202060",
				background: "#202040",
				textAccent: "#84ebff",
				textAccentSecondary: "#f3a6ff",
				textParagraph: "#dfdfe8",
				textButtonRipple: "#4199c9",
				border: "#5656a6",
				textLightMode: "#0d1117",
				textDarkMode: "#f3f3ff",
				backgroundLightMode: "#fcfcf0",
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: [
						{
							"--tw-prose-pre-bg": "rgb(40, 44, 52)",
						},
					],
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
