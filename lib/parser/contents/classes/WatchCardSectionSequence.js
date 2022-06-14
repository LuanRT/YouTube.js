const Parser = require('..');
const Text = require('./Text');

class WatchCardSectionSequence {
  type = 'WatchCardSectionSequence';

  constructor(data) {
    this.lists = Parser.parse(data.lists);
  }
}

module.exports = WatchCardSectionSequence;