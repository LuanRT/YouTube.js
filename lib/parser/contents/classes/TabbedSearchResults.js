'use strict';

const Parser = require('..');

class TabbedSearchResults {
  type = 'TabbedSearchResults';

  #data;

  constructor(data) {
    this.#data = data;
  }

  get tabs() {
    return Parser.parse(this.#data.tabs);
  }
}

module.exports = TabbedSearchResults;