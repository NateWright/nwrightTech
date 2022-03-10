module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: 'media', // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
