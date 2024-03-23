/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display:["focus-group"],
      fotfamily:{
        sans:['Roboto','sans-serif']
      },
      gridTemplateColumns:{
        '70/30' : '70% 28%',
      },
    },
  },
  plugins: [],
}