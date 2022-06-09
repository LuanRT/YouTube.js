'use strict';

const Parser = require('../contents');
const { observe, InnertubeError } = require('../../utils/Utils');

/** @namespace */
class Search {
  #page;
  #actions;
  #continuation;
  #shelf_title;
  
  /**
   * @param {object} response - API response.
   * @param {import('../../core/Actions')} actions
   * @param {boolean} is_continuation
   * @constructor
   */
  constructor(response, actions, is_continuation) {
    this.#actions = actions;
   
    this.#page = is_continuation
      && response 
      || Parser.parseResponse(response.data);
      
    const tab = this.#page.contents.tabs.get({ selected: true });
    const shelves = tab.content.contents;
    
    const item_section = shelves.get({ type: 'itemSectionRenderer' });
    
    /**
     * @type {import('../contents/classes/DidYouMean')}
     */
    this.did_you_mean = item_section?.contents.get({ type: 'didYouMeanRenderer' }) || null;
    
    /**
     * @type {import('../contents/classes/ShowingResultsFor')}
     */
    this.showing_results_for = item_section?.contents.get({ type: 'showingResultsForRenderer' }) || null;
    
    this.did_you_mean || this.showing_results_for && shelves.shift();
    
    if (is_continuation) {
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
    return new Search(response, this.#actions, true);
  }
  
  async getContinuation() {
    if (!this.#continuation)
      throw new InnertubeError('Looks like you\'ve reached the end');
    
    const response = await this.#actions.search({ ctoken: this.#continuation, client: 'YTMUSIC' });
    const data = response.data.continuationContents.musicShelfContinuation;
    
    this.results = Parser.parse(data.contents, { is_single_shelf: true, shelf_title: this.#shelf_title });
    this.#continuation = data?.continuations?.[0]?.nextContinuationData?.continuation;
    
    return this;
  }
  
  get has_continuation() {
    return !!this.#continuation;
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