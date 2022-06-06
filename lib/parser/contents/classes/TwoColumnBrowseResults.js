'use strict';

const Parser = require('..');

class TwoColumnBrowseResults {
  type = 'twoColumnBrowseResultsRenderer';
  
  #data;
  
  constructor(data) {
    this.#data = data;
  }
  
  get tabs() {
    return Parser.parse(this.#data.tabs);
  }
  
  get secondary_contents() {
    return Parser.parse(this.#data.secondaryContents);
  }
}

module.exports = TwoColumnBrowseResults;