'use strict';

const Parser = require('..');

class TabbedSearchResults {
  type = 'TabbedSearchResults';

  constructor(data) {
    this.tabs = Parser.parse(data.tabs);
  }
}

module.exports = TabbedSearchResults;