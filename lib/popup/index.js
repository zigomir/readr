// This file will be compiled to dist/js/popup.js
// you need to inspect popup to see what is going on here!

// http://stackoverflow.com/questions/25232324/chrome-browseraction-onclicked-addlistener-with-popup
// you need to have popup.js This code won't run directly from popup.html :S

/** @jsx React.DOM */
var React = require('react');

var Words = React.createClass({
  render: function() {
    var words = this.props.words;

    var wordElements = words.map(function(word) {
      return <li>{word.word} - {word.count}</li>;
    });

    return (
      <div>
        <h3>Most used word</h3>

        <ul>
          {wordElements}
        </ul>
      </div>
    );
  }
});

chrome.runtime.sendMessage({ popupOpen: true }, function(words) {
  React.render(<Words words={words} />, document.body);
});
