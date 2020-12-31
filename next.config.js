const withFonts = require('next-fonts');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withFonts(
  withSourceMaps({
    images: {
      domains: ['media.graphcms.com']
    },
    webpack(config, options) {
      return config;
    }
  })
);
