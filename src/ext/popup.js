// http://stackoverflow.com/questions/25232324/chrome-browseraction-onclicked-addlistener-with-popup
// you need to have popup.js This code won't run directly from popup.html :S
(function () {
  'use strict';
  chrome.runtime.sendMessage({ popupOpen: true });
}());
