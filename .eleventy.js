// eleventy config file
module.exports = function (eleventyConfig) {
  // ignored files, turn off opt-in of .gitignore
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("node_modules/**");

  // Copy the `css` folders to the output
  eleventyConfig.addPassthroughCopy({
    "src/assets/styles/main.css": "assets/main.css",
    "src/assets/styles/main.css.map": "assets/main.css.map",
  });

  // watch new scss builds
  eleventyConfig.addWatchTarget("src/assets/styles/main.css");
};
