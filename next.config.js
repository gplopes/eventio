const { parsed: localEnv } = require("dotenv").config();

const withPlugins = require("next-compose-plugins");

// plugins
const sass = require("@zeit/next-sass");
const typescript = require("@zeit/next-typescript");
const images = require("next-images");

const nextConfig = {
  // on dev, since our pages are so expensive, lets keep them for 24 hours
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60 * 24
  },
  // Will be available on both server and client
  publicRuntimeConfig: { ...localEnv }
};

const plugins = [typescript, sass, images];

module.exports = withPlugins(plugins, nextConfig);
