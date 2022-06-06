'use strict';

const Parser = require('../parser/contents');

/* TODO: Finish this */

/** @namespace */
class Search {
  #page;
  
  /**
   * @param {object} response - API response.
   * @param {import('./Actions')} actions
   * @constructor
   */
  constructor(response) {
    this.#page = Parser.parseResponse(response.data);
    
    this.estimated_results = this.#page.estimated_results;
    this.refinements = this.#page.refinements;
  }
}

module.exports = Search;