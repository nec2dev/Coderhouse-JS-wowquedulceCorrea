module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme:{
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container:{
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors:{ 
        'primary': '#FD3057',
        'secondary': '#ffe4d9',
        'terciary': '#674EA7',
        'checkout': '#9ee558'

      }
    },
  },
   variants: {
     extend: {
       display: ['group-hover'],
       visibility: ['group-hover']
     },
  },
  plugins: [require('@tailwindcss/forms')],
}
