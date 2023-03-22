const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Fira Sans, sans-serif'
      }
    },
  },
  plugins: [],
}
