const Parser = require('..');

class UniversalWatchCard {
  type = 'UniversalWatchCard';

  constructor(items) {
    this.header = Parser.parse(items.header);
    this.hero = Parser.parse(items.callToAction);
    this.sections = Parser.parse(items.sections);
  }
}

module.exports = UniversalWatchCard;