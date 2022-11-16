const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  
  content: ["./pages/**/*.{js,ts,tsx}",],
  theme: {

    screens: {
      
      ...defaultTheme.screens,
    },

    extend: {
      backgroundImage: {
        'background': "url('../public/background.jpg')",
        'backgroundTablet': "url('../public/tablet.jpg')",
        'destinationTablet': "url('../public/destTablet2.jpg')",
      },

      fontFamily: {
        body: ["Bellefair"],
        body1: ["Barlow"],
        body2: ["Barlow-Condensed"]
      },
        
    },

   
    Text: {
      'white': "white-700",
    },
    
  },
  plugins: [],
}
