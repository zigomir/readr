// http://stackoverflow.com/questions/25232324/chrome-browseraction-onclicked-addlistener-with-popup
// you need to have popup.js This code won't run directly from popup.html :S

// you need to inspect popup to see what is going on here!
chrome.runtime.sendMessage({ popupOpen: true }, function(words) {
  // TODO: now this can be jQuery / React App :)
  var mostUsedWord = words[0];
  document.getElementById('page-word').innerHTML =  mostUsedWord.word + ' - ' + mostUsedWord.count;
});
