'use strict';

const Parser = require('..');

class MusicQueue {
  type = 'MusicQueue';
  
  constructor(data) {
    this.content = Parser.parse(data.content);
  }
}

module.exports = MusicQueue;