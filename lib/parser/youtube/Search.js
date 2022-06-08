'use strict';

const Parser = require('../contents');

/** @namespace */
class Search {
  #page;
  #actions;
  #continuation;
  
  /**
   * @param {object} response - API response.
   * @param {import('./Actions')} actions
   * @param {boolean} is_continuation
   * @constructor
   */
  constructor(response, actions, is_continuation) {
    this.#actions = actions;
   
    this.#page = is_continuation
      && response 
      || Parser.parseResponse(response.data);
    
    this.estimated_results = this.#page.estimated_results;
    this.refinements = this.#page.refinements || [];
    
    const contents = is_continuation
      && this.#page.on_response_received_commands[0].continuation_items
      || this.#page.contents.primary_contents.contents;
    
    this.results = contents.get({ type: 'itemSectionRenderer' }).contents;
    this.#continuation = contents.get({ type: 'continuationItemRenderer' });
  }
  
  async getContinuation() {
    const response = await this.#continuation.endpoint.call(this.#actions);
    return new Search(response, this.#actions, true);
  }
  
  get has_continuation() {
    return !!this.#continuation;
  }
  
  get videos() {
    return this.results.findAll({ type: 'videoRenderer' });
  }
  
  get playlists() {
    return this.results.findAll({ type: 'playlistRenderer' });
  }
  
  get page() {
    return this.#page;
  }
}

module.exports = Search;