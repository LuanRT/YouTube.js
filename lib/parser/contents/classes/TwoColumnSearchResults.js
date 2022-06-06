'use strict';

const Parser = require('..');

class TwoColumnSearchResults {
  type = 'twoColumnSearchResultsRenderer';
  
  #data;
  
  constructor(data) {
    this.#data = data;
  }
  
  get primary_contents() {
    return Parser.parse(this.#data.primaryContents);
  }
  
  get secondary_contents() {
    return Parser.parse(this.#data.secondaryContents);
  }
}

module.exports = TwoColumnSearchResults;