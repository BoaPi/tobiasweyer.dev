// eleventy config file
module.exports = function (eleventyConfig) {
  // Copy the `css` folders to the output
  eleventyConfig.addPassthroughCopy({
    "src/assets/styles/main.css": "assets/main.css",
    "src/assets/styles/main.css.map": "assets/main.css.map",
  });

  // watch new scss builds
  eleventyConfig.addWatchTarget("src/assets/styles/main.css");
};
