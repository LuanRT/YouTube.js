'use strict';

const Parser = require('../parser/contents');

/** @namespace */
class Analytics {
  #page;
  
  /**
   * @param {object} response - API response.
   * @constructor
   */
  constructor(response) {
    this.#page = Parser.parseResponse(response);
  
    const tab = this.#page.contents.tabs.get({ selected: true });
    const item = tab.content.contents.get({ target_id: null });
   
    this.sections = item.contents;
  }
  
  get page() {
    return this.#page;
  }
}

module.exports = Analytics;