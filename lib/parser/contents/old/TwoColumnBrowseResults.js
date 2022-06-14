const Parser = require('..');

class TwoColumnBrowseResults {
  type = 'TwoColumnBrowseResults';

  constructor(item) {
    this.tabs = Parser.parse(item.tabs);
  }
}

module.exports = TwoColumnBrowseResults;