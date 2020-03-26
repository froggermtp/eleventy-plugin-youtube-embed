const test = require('ava');
const patternPresent = require('./lib/spotPattern.js');
const extractVideoId = require('./lib/extractMatches.js');
const buildEmbedCodeString = require('./lib/buildEmbed.js');

const validStrings = [
  {type: 'Ideal case', str: '<p>https://www.youtube.com/watch?v=hIs5StN8J-0</p>'},
  {type: 'Without https', str: '<p>http://www.youtube.com/watch?v=hIs5StN8J-0</p>'},
  {type: 'Without protocol', str: '<p>www.youtube.com/watch?v=hIs5StN8J-0</p>'},
  {type: 'Without www', str: '<p>youtube.com/watch?v=hIs5StN8J-0</p>'},
  {type: 'Without watch?v=', str: '<p>youtube.com/hIs5StN8J-0</p>'},
]

validStrings.forEach(function(obj){
  test(obj.type, t => {
    t.truthy(patternPresent(obj.str));
  });
})