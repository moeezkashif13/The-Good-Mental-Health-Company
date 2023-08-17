/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {

    
    extend: {

    screens:{
      'anotherMobile':'420px',
      'anotherDesktop' : '1200px',
      'bookingForm' : '1160px'
    },

      padding:{

        'mobileVerticalPadding' : '36px',
        'secondVerticalPadding' : '56px',

        'mobilePadding': '16px',
        'secondMobilePadding' : '32px',
        'tabletPadding' : '40px',
        'desktopPadding' : '80px'

        
      },

    colors:{
      'primary': '#2f3d60',
'secondary' : '#F9F2EB',
'thirdbg' : '#C6D4C8',
'fourthbg' : '#2F5560',
'textone' : '#1C376A'

    }
      


    },

  },
  plugins: [],
}
