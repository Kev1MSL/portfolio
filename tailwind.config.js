/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      border: "#5656a6"

    },
    backgroundColor: "#202040",
    textColor: "#f3f3ff",
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Satoshi-Variable', 'sans-serif'],
      },
      fontWeight: {
        'extra-bold': 800,
      },
    },
  },
  plugins: [],
}
