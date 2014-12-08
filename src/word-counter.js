(function () {
  'use strict';

  var pageWords = $(document).text().split(' ');

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

  var sortedWords = _.sortBy(wordCounts(_.countBy(pageWords)), function(word) {
    return word.count * -1;
  });

  chrome.runtime.sendMessage({ words: sortedWords });
}());
