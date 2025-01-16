/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index2.html",
    "./css/**/*.css",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#e6dfec",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // for styling forms
    require('@tailwindcss/typography'), // Enhances text formatting
    require('@tailwindcss/aspect-ratio'), // Useful for managing responsive images/videos
  ],
};
