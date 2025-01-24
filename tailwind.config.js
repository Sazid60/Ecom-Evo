/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',
        secondary: '#E5E5E5',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['"Playwrite AU SA"', 'serif'],
        highlight: ['"Alfa Slab One"', 'serif']
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"], // Enable default DaisyUI themes
  },
}

