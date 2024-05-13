/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['router-link-active'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(3, minmax(0, 3fr))'
      }
    }
  },
  plugins: []
}
