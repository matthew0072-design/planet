const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  
  content: ["./pages/**/*.{js,ts,tsx}",],
  theme: {

    screens: {
      
      ...defaultTheme.screens,
    },

    
      

      fontFamily: {
        body: ["Bellefair"],
        body1: ["Barlow"],
        body2: ["BarlowCondensed"]
      },
        
  

   
    Text: {
      'white': "white-700",
    },
    
  },
  plugins: [],
}
