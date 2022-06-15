'use strict';

const Parser = require('..');

class UniversalWatchCard {
  type = 'UniversalWatchCard';
  
  constructor(data) {
    this.header = Parser.parse(data.header);
    this.call_to_action = Parser.parse(data.callToAction);
    this.sections = Parser.parse(data.sections);
  }
}

module.exports = UniversalWatchCard;