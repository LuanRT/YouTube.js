const ResultsParser = require('.');

class TwoColumnSearchResults {
  type = 'TwoColumnSearchResults';

  constructor(items) {
    this.primary = ResultsParser.parseItem(items.primaryContents);
    if (items.secondaryContents)
      this.secondary = ResultsParser.parseItem(items.secondaryContents);
  }
}

module.exports = TwoColumnSearchResults;