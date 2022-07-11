'use strict';

const Parser = require('..');

class SearchSuggestionsSection {
  type = 'SearchSuggestionsSection';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
  }
}

module.exports = SearchSuggestionsSection;