var wordCounter = require('../word-counter');

var countedWords = wordCounter(document.body.textContent.split(/\W+/));
chrome.runtime.sendMessage({ words: countedWords });
