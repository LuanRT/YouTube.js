'use strict';

const Parser = require('..');

class SingleColumnBrowseResults {
  type = 'singleColumnBrowseResultsRenderer';
  
  #data;
  
  constructor(data) {
    this.#data = data;
  }
  
  get tabs() {
    return Parser.parse(this.#data.tabs);
  }
}

module.exports = SingleColumnBrowseResults; 