const withSass = require("@zeit/next-sass");

const sass = withSass();
module.exports = {
  ...sass,
  onDemandEntries: {
    // on dev, since our pages are so expensive, lets keep them for 24 hours
    maxInactiveAge: 1000 * 60 * 60 * 24
  }
};
