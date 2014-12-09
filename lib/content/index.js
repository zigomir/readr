var wordCounter = require('../word-counter');

var countedWords = wordCounter(document.body.textContent.split(' '));
chrome.runtime.sendMessage({ words: countedWords });
