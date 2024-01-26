/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'title-family': ['Boxing', 'sans-serif'],
        'subtitle-family': ['Quicksand', 'sans-serif'],
        
      },
      colors: {
        'blue-metal': 'rgba(0, 0, 255, 1)',
      },
      maxWidth: {
        '1440': '1440px',
      }
    },
  },
  plugins: [],
}

/*LETRAS

  'Panchang', 'sans-serif'
  'Boxing', 'sans-serif'
  'Quicksand', 'sans-serif'
  'Bespoke Stencil', 'sans-serif'
  'Author', 'sans-serif'

*/