/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        clifford: "#da373d",
        primary: "#64CCC5",
        dark: "#of172a",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
        navbar: "1320px",
      },
      fontFamily: {
        inter: ["Inter , sans-serif"],
        didact: ["Didact Gothic", "sans-serif"],
        sans: ["Noto Sans Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
