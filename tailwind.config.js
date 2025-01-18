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
        customPurple: '#6a1b9a',
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#e6dfec",
        customBlue: '#3b82f6',
        customPink: '#ec4899',
        customYellow: '#facc15',
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
