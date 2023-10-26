/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 4px 4px 0px rgba(0,0,0,0.25)',
      },
    },
    colors: {
      green: '#35694F',
      white: '#FFF',
      red: '#D30000',
      'light-green': '#55A37C',
      'dark-green': '#0A2819',
    },
  },
  plugins: [],
};
