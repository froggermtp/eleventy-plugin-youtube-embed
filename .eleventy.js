const cheerio = require('cheerio');
const patternPresent = require('./lib/spotPattern.js');
const extractVideoId = require('./lib/extractMatches.js');
const buildEmbedCodeString = require('./lib/buildEmbed.js');
const pluginDefaults = require('./lib/pluginDefaults.js');

function parseMatches(matches, content, pluginConfig) {
  matches.forEach(function (stringToReplace) {
    let videoId = extractVideoId(stringToReplace);
    let embedCode = buildEmbedCodeString(videoId, pluginConfig);
    content = content.replace(stringToReplace, embedCode);
  });

  return content;
}

module.exports = {
  configFunction: function (eleventyConfig, options) {
    const pluginConfig = Object.assign(pluginDefaults, options);
    eleventyConfig.addTransform("embedYouTube", async (content, outputPath) => {
      if (outputPath && outputPath.endsWith(".html")) {
        const $ = cheerio.load(content);

        $(pluginConfig.only).each(function (ii, el) {
          const html = $.html($(this));
          const matches = patternPresent(html);
          const newContent = matches ? parseMatches(matches, html, pluginConfig) : html;
          $(newContent).insertBefore($(this));
          $(this).remove();
        });

        return $.html();
      }

      return content;
    });
  };
}
