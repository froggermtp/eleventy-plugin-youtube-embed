const { spotPattern } = require("./regex.js");

module.exports = function(str) {
  return str.match(spotPattern);
}