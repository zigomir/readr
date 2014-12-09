var wordCounter = require('../../lib/word-counter');

describe('word counter', function() {
  it('should count words', function() {
    var result = wordCounter('hudascena hudascena fkyea fkyea fkyea'.split(' '));

    expect(result[0]).toEqual({ word: 'fkyea', count: 3 });
    expect(result[1]).toEqual({ word: 'hudascena', count: 2 });
  });

  it('should not count too short words', function() {
    var result = wordCounter('lol lol lol'.split(' '));
    expect(result).toEqual([]);
  });
});
