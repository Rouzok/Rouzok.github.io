/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
        blackopsone: ['Black Ops One'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      scale: {
        35: '.35',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
