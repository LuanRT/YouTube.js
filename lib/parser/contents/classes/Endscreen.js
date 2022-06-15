'use strict';

const Parser = require('..');

class Endscreen {
  type = 'Endscreen';
  
  constructor(data) {
    this.elements = Parser.parse(data.elements);
    this.start_ms = data.startMs;
  }
}

module.exports = Endscreen;