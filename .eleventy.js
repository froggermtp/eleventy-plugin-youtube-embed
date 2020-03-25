const patternPresent = require('./lib/spotPattern.js');
const extractVideoId = require('./lib/extractMatches.js');
const buildEmbedCodeString = require('./lib/buildEmbed.js');

module.exports = function(eleventyConfig, options) {
  const defaults = {
    noCookie: true,
    embedClass: 'eleventy-plugin-youtube-embed',
    allowAttrs: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowFullscreen: true,
    allowAutoplay: false
  };
  const pluginConfig = Object.assign(defaults, options);

  eleventyConfig.addTransform("embedYouTube", async (content, outputPath) => {
    if (!outputPath.endsWith(".html")) {
      return content;
    }
    let matches = patternPresent(content);
    if (!matches) {
      return content;
    }
    matches.forEach(function(stringToReplace) {
      let videoId = extractVideoId(stringToReplace);
      let embedCode = buildEmbedCodeString(videoId, pluginConfig);
      content = content.replace(stringToReplace, embedCode);
    });
    return content;
  });
};
