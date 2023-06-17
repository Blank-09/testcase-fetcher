/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}', 'index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: 'class',
}
