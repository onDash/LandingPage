/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue1': '#3B4F73',
      'blue2': '#7499D1',
      'gray1': '#5D5F62',
      'gray2': '#9EA2A1',
      'gray3': '#E0E0E0',
      'white': '#ffffff',
    },

    fontFamily: {
      logo: ['Exo 2', 'sans-serif'],
      Mulish: ['Mulish', 'sans-serif'],
    },

    fontSize: {
      'title1': '60px',
      'title2': '48px',
      'subtitle': '36px',
      'text1': '28x',
      'text2': '24px',
    },

    fontWeight: {
      light: '300',
      normal: '400', //regular
      bold: '700', 
    },
    
    borderRadius: {
      DEFAULT: '20px',
    }
  },
  plugins: [],
}