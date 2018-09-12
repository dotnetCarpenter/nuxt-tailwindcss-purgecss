const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = {
  plugins: [
  	require('postcss-import'), // support for @import statements
    require('postcss-url'), // not sure but nuxt uses this
    require('tailwindcss')(tailwindJS),
    require('postcss-custom-properties'), // support for variables
    require('postcss-color-function'), // support for shade etc
    require('autoprefixer')
  ]
}
