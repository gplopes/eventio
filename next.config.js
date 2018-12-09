const withPlugins = require("next-compose-plugins");

// plugins
const sass = require("@zeit/next-sass");
const typescript = require("@zeit/next-typescript");
const images = require("next-images");

const nextConfig = {
  onDemandEntries: {
    // on dev, since our pages are so expensive, lets keep them for 24 hours
    maxInactiveAge: 1000 * 60 * 60 * 24
  }
};

const plugins = [typescript, sass, images];

module.exports = withPlugins(plugins, nextConfig);
