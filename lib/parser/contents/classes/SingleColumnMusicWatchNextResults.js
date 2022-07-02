'use strict';

const Parser = require('..');

class SingleColumnMusicWatchNextResults {
  type = 'SingleColumnMusicWatchNextResults';

  constructor(data) {
    return Parser.parse(data);
  }
}

module.exports = SingleColumnMusicWatchNextResults;