// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  plugins: [
    // Add vendor prefixes to CSS rules using values from caniuse.com
    // https://github.com/postcss/autoprefixer
    require('autoprefixer')({
      browsers: [
        'iOS >= 8',
        'Android >= 4'
      ]
    })
  ]
};