// eleventy config file
module.exports = function (eleventyConfig) {
  // Copy the `css` folders to the output
  eleventyConfig.addPassthroughCopy({
    "src/assets/main.css": "assets/main.css",
    "src/assets/main.css.map": "assets/main.css.map",
  });

  // watch new scss builds
  eleventyConfig.addWatchTarget("src/assets/main.css");
};
