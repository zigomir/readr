chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: 'underscore-min.js'});
  chrome.tabs.executeScript(null, {file: 'jquery.min.js'});
  chrome.tabs.executeScript(null, {file: 'word-counter.js'});
});

// https://developer.chrome.com/extensions/messaging
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  //console.log(message, sender, sendResponse);
  console.log(message.words[0]);
});
