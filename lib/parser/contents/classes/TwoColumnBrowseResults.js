'use strict';

const Parser = require('..');

class TwoColumnBrowseResults {
  type = 'twoColumnBrowseResultsRenderer';
  
  constructor(data) {
    this.tabs = Parser.parse(data.tabs);
    this.secondary_contents = Parser.parse(data.secondaryContents);
  }
}

module.exports = TwoColumnBrowseResults;