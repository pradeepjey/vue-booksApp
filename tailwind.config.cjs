/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#3f51b5',
        'white': '#ffffff',
      },
      container: {
        center: true,
        padding: '1rem'
      },
    }
    
    
  },
  plugins: [],
}
