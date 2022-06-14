const Parser = require('..');
const Text = require('./Text');

class WatchCardSectionSequence {
  type = 'WatchCardSectionSequence';

  constructor(item) {
    this.lists = Parser.parse(item.lists);
  }
}

module.exports = WatchCardSectionSequence;