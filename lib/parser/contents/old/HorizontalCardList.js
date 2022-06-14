const Parser = require('..');
const Text = require('./Text');

class HorizontalCardList {
  type = 'HorizontalCardList';

  constructor(item) {
    this.cards = Parser.parse(item.cards);
    this.header = item.header?.title ? new Text(item.header) : null;
  }
}

module.exports = HorizontalCardList;