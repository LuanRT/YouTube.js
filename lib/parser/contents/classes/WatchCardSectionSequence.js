'use strict';

const Parser = require('..');

class WatchCardSectionSequence {
  type = 'WatchCardSectionSequence';

  constructor(data) {
    this.lists = Parser.parse(data.lists);
  }
}

module.exports = WatchCardSectionSequence;