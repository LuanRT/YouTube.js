'use strict';

const Parser = require('../contents');
const { observe, InnertubeError } = require('../../utils/Utils');

/** @namespace */
class Search {
  #page;
  #actions;
  #continuation;
  #shelf_title;
  #header;
  
  /**
   * @param {object} response - API response.
   * @param {import('../../core/Actions')} actions
   * @param {object} args
   * @param {boolean} args.is_continuation
   * @param {boolean} args.is_filtered
   * @constructor
   */
  constructor(response, actions, args = {}) {
    this.#actions = actions;
   
    this.#page = args.is_continuation
      && response 
      || Parser.parseResponse(response.data);
      
    const tab = this.#page.contents.tabs.get({ selected: true });
    const shelves = tab.content.contents;
    
    const item_section = shelves.get({ type: 'itemSectionRenderer' });
 
    this.#header = tab.content.header;
    
    /**
     * @type {import('../contents/classes/DidYouMean')}
     */
    this.did_you_mean = item_section?.contents.get({ type: 'didYouMeanRenderer' }) || null;
    
    /**
     * @type {import('../contents/classes/ShowingResultsFor')}
     */
    this.showing_results_for = item_section?.contents.get({ type: 'showingResultsForRenderer' }) || null;
    
    (!!this.did_you_mean || !!this.showing_results_for) && shelves.shift();
    
    if (args.is_continuation || args.is_filtered) {
      const shelf = shelves.get({ type: 'musicShelfRenderer' });
     
      this.results = shelf.contents;
      this.#shelf_title = shelf.title.toString();
      this.#continuation = shelf.continuation;
      
      return;
    }
   
    this.sections = observe(shelves.map((shelf) => ({
      title: shelf.title.toString(),
      items: shelf.contents,
      getMore: () => this.#getMore(shelf)
    })));
  }
  
  async #getMore(shelf) {
    if (!shelf.endpoint)
      throw new InnertubeError(shelf.title.toString() + ' doesn\'t have more items');
    
    const response = await shelf.endpoint.call(this.#actions, 'YTMUSIC');
    return new Search(response, this.#actions, { is_continuation: true });
  }
  
  /**
   * Retrieves continuation, only works for individual sections or filtered results.
   * @returns {Promise.<Search>}
   */
  async getContinuation() {
    if (!this.#continuation)
      throw new InnertubeError('Looks like you\'ve reached the end');
    
    const response = await this.#actions.search({ ctoken: this.#continuation, client: 'YTMUSIC' });
    const data = response.data.continuationContents.musicShelfContinuation;
    
    this.results = Parser.parse(data.contents);
    this.#continuation = data?.continuations?.[0]?.nextContinuationData?.continuation;
    
    return this;
  }
  
    /**
   * Applies given filter to the search.
   * @param {string} name
   * @returns {Promise.<Search>}
   */
  async selectFilter(name) {
    if (!this.filters.includes(name))
      throw new InnertubeError('Invalid filter', { available_filters: this.filters });
    
    const filter = this.#header.chips.get({ text: name });
    if (filter.is_selected) return this;
    
    const response = await filter.endpoint.call(this.#actions, 'YTMUSIC');
    
    return new Search(response, this.#actions, { is_continuation: true });
  }
  
  /** @type {boolean} */
  get has_continuation() {
    return !!this.#continuation;
  }
  
  /** @type {string[]} */
  get filters() {
    return this.#header.chips.map((chip) => chip.text);
  }
 
  /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
  get songs() {
    return this.sections.get({ title: 'Songs' });
  }
  
  /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
  get videos() {
    return this.sections.get({ title: 'Videos' });
  }
  
  /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
  get albums() {
    return this.sections.get({ title: 'Albums' });
  }
  
  /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
  get artists() {
    return this.sections.get({ title: 'Artists' });
  }
  
  /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
  get playlists() {
    return this.sections.get({ title: 'Community playlists' });
  }
  
  /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
  get page() {
    return this.#page;
  }
}

module.exports = Search;