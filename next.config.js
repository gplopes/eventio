const withSass = require("@zeit/next-sass");
const withTypescript = require('@zeit/next-typescript')

const typescript = withTypescript();
const sass = withSass();

module.exports = {
  ...typescript,
  ...sass,
  onDemandEntries: {
    // on dev, since our pages are so expensive, lets keep them for 24 hours
    maxInactiveAge: 1000 * 60 * 60 * 24
  }
};
