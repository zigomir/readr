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
      return <tr><td>{word.count}</td><td>{word.word}</td></tr>;
    });

    return (
      <div>
        <h3>Most used words</h3>

        <table>
          <thead>
            <tr>
              <th>Count</th>
              <th>Word</th>
            </tr>
          </thead>

          <tbody>
            {wordElements}
          </tbody>
        </table>
      </div>
    );
  }
});

chrome.runtime.sendMessage({ popupOpen: true }, function(words) {
  React.render(<Words words={words} />, document.body);
});
