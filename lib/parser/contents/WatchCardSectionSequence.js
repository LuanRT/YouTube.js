const ResultsParser = require('.');
const Text = require('./Text');

class WatchCardSectionSequence {
  type = 'WatchCardSectionSequence';

  constructor(item) {
    this.lists = ResultsParser.parse(item.lists);
  }
}

module.exports = WatchCardSectionSequence;