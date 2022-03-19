module.exports = {
  purge:[],
  content: [],
  darkMode: false,
  theme: {
    debugScreens: {
      position: ['top','left']
    },
    extend: {},
  },
  plugins: [
      require('tailwindcss-debug-screens')
  ]
}
