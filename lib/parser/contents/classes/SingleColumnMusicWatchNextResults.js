'use strict';

const Parser = require('..');

class SingleColumnMusicWatchNextResults {
  type = 'singleColumnMusicWatchNextResults';
  
  constructor(data) {
    return Parser.parse(data);
  }
}

module.exports = SingleColumnMusicWatchNextResults;