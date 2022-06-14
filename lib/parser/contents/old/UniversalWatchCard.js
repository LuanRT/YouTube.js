const Parser = require('..');

class UniversalWatchCard {
  type = 'UniversalWatchCard';

  constructor(items) {
    this.header = Parser.parseItem(items.header);
    this.hero = Parser.parseItem(items.callToAction);
    this.sections = Parser.parse(items.sections);
  }
}

module.exports = UniversalWatchCard;