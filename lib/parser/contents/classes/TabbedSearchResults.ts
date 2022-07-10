'use strict';

import Parser from '..';

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

export default TabbedSearchResults;