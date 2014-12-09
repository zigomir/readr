var _ = require('underscore');

function wordCounts(object) {
  var result = [];
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var count = object[key];

      if (key.length > 5) {
        result.push({
          word: key,
          count: count
        });
      }
    }
  }

  return result;
}

module.exports = function(pageWords) {
  return _.sortBy(wordCounts(_.countBy(pageWords)), function(word) {
    return word.count * -1;
  });
};
