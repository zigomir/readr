// chrome.browserAction.onClicked
// https://developer.chrome.com/extensions/browserAction#popups
// Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup.
(function() {
  'use strict';

  var popupResponder;
  // https://developer.chrome.com/extensions/messaging
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.popupOpen) {
      chrome.tabs.executeScript(null, {file: 'bower_components/underscore/underscore-min.js'});
      chrome.tabs.executeScript(null, {file: 'bower_components/jquery/dist/jquery.min.js'});
      chrome.tabs.executeScript(null, {file: 'src/word-counter.js'});

      popupResponder = sendResponse; // save for later
      return true; // this return here is significant!
    }

    if (message.words) {
      popupResponder(message.words);
      return true;
    }
  });
}());
