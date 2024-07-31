/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        
      },
      colors:{
        backgroundHero:"#252639",
        backgroundHeader:"#201E2E",
        primary:"#450170",
        secondary:"#FFBD00",
        texto:"#CE656D",
        descripcionHero:"#9A9AA5",

      }
    },
  },
  plugins: [],
}