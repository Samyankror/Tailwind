/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
      extend: {
        keyframes :{
          slide: {
          '0%':{transform:'translateX(-100%)'},
          '100%':{transform:'translateX(0)'},
          },
          slide1:{
            '0%':{transform:'translateX(100%)'},
            '100%':{transform:'translateX(0)'},
          },
        },
           animation:{
            slide:'slide 1s ease-in-out forwards',
            slide1:'slide1 1s ease-in-out forwards',
           },
          
        },
    },
  
  plugins: [],
}

