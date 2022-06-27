// eleventy config file
module.exports = function (eleventyConfig) {
  // Copy the `css` folders to the output
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "node_modules/normalize.css/normalize.css": "assets/normalize.css",
  });
};
