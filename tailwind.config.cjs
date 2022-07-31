/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          fontFamily: {
              sans: ['Nunito', ...defaultTheme.fontFamily.sans],
          },
          colors:{
              'brand-blue' :'#3B5495',
              'brand-green' :'#71C44C',
              'dark': '#0F172A',
              'dark-box': '#1E293B'
          }
      },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
