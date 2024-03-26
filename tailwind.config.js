module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        primary: '#1b5cff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}