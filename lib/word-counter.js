var _ = require('underscore');

function wordCounts(object) {
  return Object.keys(object).map(function(word) {
    return {
      word: word,
      count: object[word]
    };
  }).filter(function(res) { return res.word.length >= 4; });
}

var toLower = function(word) { return word.toLowerCase(); };

module.exports = function(words) {
  return _.sortBy(wordCounts(_.countBy(words.map(toLower))), function(word) {
    return word.count * -1;
  });
};
