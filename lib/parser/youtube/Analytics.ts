'use strict';

import Parser from '../contents';

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

export default Analytics;
