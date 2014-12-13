var _ = require('underscore');

function wordCounts(object) {
  return Object.keys(object).map(function(word) {
      return {
        word: word,
        count: object[word]
      };
  }).filter(function(res) { return res.word.length >= 4; });
}

module.exports = function(words) {
  return _.sortBy(wordCounts(_.countBy(words)), function(word) {
    return word.count * -1;
  });
};
