/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      'orange': 'hsl(26deg , 100%, 55%)',
      'paleOrange': 'hsl(25deg , 100%, 94%)',
      'veryDarkBlue': 'hsl(220deg , 13%, 13%)',
      'darkGrayishBlue': 'hsl(219deg , 9%, 45%)',
      'grayishBlue': 'hsl(220deg , 14%, 75%)',
      'lightGrayishBlue': 'hsl(223deg , 64%, 98%)',
    },
    fontFamily: {
      display : ['Kumbh Sans', 'sans-serif']
    }
  },
  plugins: [],
}

