'use strict';

const Parser = require('..');

class TwoColumnSearchResults {
  type = 'twoColumnSearchResultsRenderer';
  
  constructor(data) {
    this.primary_contents = Parser.parse(data.primaryContents);
    this.secondary_contents = Parser.parse(data.secondaryContents);
  }
}

module.exports = TwoColumnSearchResults;