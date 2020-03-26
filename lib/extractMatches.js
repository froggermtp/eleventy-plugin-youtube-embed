const { extractId } = require("./regex.js");

module.exports = function(str) {
  // CHANGE @1.3.0: Remove named capture group (Node ^10). Instead use destructuring (Node ^6).
  let [ , out ] = extractId.exec(str);
  return out;
}