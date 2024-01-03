/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,php,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        main: '#316620',
        secondary: '#334155',
        third: '#e2e8f0',
      },
      fontFamily: {
        inter: 'Inter',
      },
      screens: {
        'xl': '1080px'
      },
    },
  },
  plugins: [],
}

