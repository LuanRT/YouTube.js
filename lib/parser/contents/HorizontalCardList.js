const ResultsParser = require('.');
const Text = require('./Text');

class HorizontalCardList {
  type = 'HorizontalCardList';

  constructor(item) {
    this.cards = ResultsParser.parse(item.cards);
    this.header = item.header?.title ? new Text(item.header) : null;
  }
}

module.exports = HorizontalCardList;