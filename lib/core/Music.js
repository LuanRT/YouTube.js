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
   * @param {string} query
   * @returns {Promise.<Search>}
   */
  async search(query) {
    const response = await this.#actions.search({ query, client: 'YTMUSIC' });
    return new Search(response, this.#actions);
  }
}

module.exports = Music;