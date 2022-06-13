'use strict';

const Parser = require('..');

class SingleColumnBrowseResults {
  type = 'singleColumnBrowseResultsRenderer';
  
  constructor(data) {
    this.tabs = Parser.parse(data.tabs);
  }
}

module.exports = SingleColumnBrowseResults; 