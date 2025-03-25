/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "rodai-purple": "#6E56E3",
        "rodai-dark": "#1A1A2E",
        "rodai-light": "#F5F5F7",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "rodai-glow": "0px 0px 20px 0px rgba(110, 86, 227, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
