/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "450px",
      ...defaultTheme.screens,
    },
    colors: {
      black: "#14142B",
      grey: "#4E4B66",
      white: "#ffffff",
      offwhite: "#EFF0F6",
    },
    extend: {},
  },
  plugins: [],
};
