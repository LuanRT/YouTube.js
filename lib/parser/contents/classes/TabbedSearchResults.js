'use strict';

const Parser = require('..');

class TabbedSearchResults {
  type = 'tabbedSearchResultsRenderer';
  
  #data;
  
  constructor(data) {
    this.#data = data;
  }
  
  get tabs() {
    return Parser.parse(this.#data.tabs);
  }
}

module.exports = TabbedSearchResults;