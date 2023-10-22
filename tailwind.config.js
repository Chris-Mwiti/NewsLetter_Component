/** @type {import('tailwindcss').Config} */
import DefaultTheme from 'tailwindcss/defaultTheme'
const defaultTheme = DefaultTheme;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    primary:'#252541',
    secondaryTextColor: '#36384e',
    backgroundGrey: '#9294a0',
    fontFamily:{
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],        
}

