const Parser = require('..');

class TwoColumnSearchResults {
  type = 'TwoColumnSearchResults';

  constructor(items) {
    this.primary = Parser.parseItem(items.primaryContents);
    if (items.secondaryContents)
      this.secondary = Parser.parseItem(items.secondaryContents);
  }
}

module.exports = TwoColumnSearchResults;