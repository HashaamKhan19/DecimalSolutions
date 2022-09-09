/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        accentColor: "#A4238C",
        textColor: "#3F3F3F",
        boxColor: "#C4C4C4",
      },
      // backgroundImage: {
      //   quote: "url('./src/public/quotes.png')",
      // },
    },
  },
  plugins: [],
};
