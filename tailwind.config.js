/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xlg:'1440px',
    },
    extend: {
      colors:{
        brightRed:          'hsl(12, 88%, 59%)',
        brightRedLight:     'hsl(12, 88%, 69%)',
        brightRedSupLight:  'hsl(12, 88%, 95%)',
        darkBlue:           'hsl(228, 39%, 23%)',
        darkGrayishBlue:    'hsl(227, 12%, 61%)',
        veryDarkBlue:       'hsl(233, 12%, 13%)',
        veryPaleRed:        'hsl(13, 100%, 96%)',
        veryLightGray:      'hsl(0, 0%, 98%)',

      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },


      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        }
      }


    },
  },
  plugins: [],
}

