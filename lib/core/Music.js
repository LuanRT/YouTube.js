'use strict';

const Search = require('../parser/ytmusic/Search');

/** @namespace */
class Music {
  #session;
  #actions;
  
  /**
   * @param {Innertube} session
   * @constructor
   */
  constructor(session) {
    this.#session = session;
    this.#actions = session.actions;
  }
  
  /**
   * Search on YouTube Music.
   * 
   * @param {string} query
   * @param {object} filters - search filters
   * @param {string} [filters.type] - all | song | video | album | playlist | artist
   * 
   * @returns {Promise.<Search>}
   */
  async search(query, filters) {
    const response = await this.#actions.search({ query, filters, client: 'YTMUSIC' });
    return new Search(response, this.#actions, { is_filtered: filters?.hasOwnProperty('type') && filters.type !== 'all' });
  }
}

module.exports = Music;