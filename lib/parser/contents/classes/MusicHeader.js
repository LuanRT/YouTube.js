'use strict';

const Parser = require('..');

class MusicHeader {
  type = 'MusicHeader';

  constructor(data) {
    this.header = Parser.parse(data.header);
  }
}

module.exports = MusicHeader;