// chrome.browserAction.onClicked
// https://developer.chrome.com/extensions/browserAction#popups
// Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup.
(function() {
  'use strict';

  // https://developer.chrome.com/extensions/messaging
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.popupOpen) {
      chrome.tabs.executeScript(null, {file: 'bower_components/underscore/underscore-min.js'});
      chrome.tabs.executeScript(null, {file: 'bower_components/jquery/dist/jquery.min.js'});
      chrome.tabs.executeScript(null, {file: 'word-counter.js'});
    }

    if (message.words) {
      var mostUsedWord = message.words[0];
      var views = chrome.extension.getViews({type: 'popup'});
      views[0].document.getElementById('page-word').innerHTML =  mostUsedWord.word + ' - ' + mostUsedWord.count;
    }
  });
}());
