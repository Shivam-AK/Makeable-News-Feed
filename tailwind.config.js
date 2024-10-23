/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      xl: { 'max': '1279px' },
      lg: { 'max': '1023px' },
      md: { 'max': '767px' },
      sm: { 'max': '639px' },
      mb: { 'max': '480px' },
    },
    extend: {
      colors: {
        lightGray: "#EEF1F4",
        rock: "#354f6a",
        orange: "#ff5560",
        green: "#5fc172",
        blue: "#337ab7",
        h3Color: "#337ab7",
      },
    },
  },
  plugins: [],
}

