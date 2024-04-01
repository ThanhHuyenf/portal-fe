module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        primary: '#1b5cff',
        secondary: '#64c5b1'
      },
      textColor: {
        primary: '#1b5cff',
        secondary: '#64c5b1',
        danger: '#e3342f',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}