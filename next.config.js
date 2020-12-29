const withFonts = require('next-fonts');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withFonts(
  withSourceMaps({
    webpack(config, options) {
      return config;
    }
  })
);
