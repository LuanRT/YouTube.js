'use strict';

const Parser = require('..');

/** @namespace */
class Analytics {
  #page;

  /**
   * @param {object} response - API response.
   */
  constructor(response) {
    this.#page = Parser.parseResponse(response);

    this.sections = this.#page.contents_memo.get('Element');
  }

  get page() {
    return this.#page;
  }
}

module.exports = Analytics;
