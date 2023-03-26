/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#1db954",
        darkGrey: "#393433",
        black: "#121212",
        gray: "#535353",
        lightGrey: "#b3b3b3",
      },
      fontFamily: {
        spotify: ["Gotham SSm A", "Gotham SSm B", "sans-serif"],
      },
    },
  },
  plugins: [],
};
