/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handWriting: ["Kalam", "cursive"],
        primary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        bgPrimary: "url('/src/misc/Background.png')",
      },
      colors: {
        orange: "#E49B06",
        gray: "#D6C9B9",
        textBlack: "#323433",
      },
    },
  },
  plugins: [],
};
