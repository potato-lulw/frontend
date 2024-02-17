/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blue :{

          950 : '#070F2B',
          850 : '#1B1A55',
          450 : '#535C91',
          350 : '#aeace8',
        },
        text : {
          50 : '#eee',
        }
        

      }
    },
  },
  plugins: [],
}

