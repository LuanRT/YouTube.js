'use strict';

const Parser = require('../contents');
const { InnertubeError, observe } = require('../../utils/Utils');
  
/** @namespace */
class Search {
  #page;
  #actions;
  #continuation;
  
  /**
   * @param {object} response - API response.
   * @param {import('../../core/Actions')} actions
   * @param {object} [args]
   * @param {boolean} [args.is_continuation]
   */
  constructor(response, actions, args = {}) {
    this.#actions = actions;
   
    this.#page = args.is_continuation
      && response 
      || Parser.parseResponse(response.data);
    
    const contents = this.#page.contents?.primary_contents.contents
      || this.#page.on_response_received_commands[0].continuation_items;
    
    const secondary_contents = this.#page.contents?.secondary_contents?.contents;
  
    /** @type {object[]} */
    this.results = contents.get({ type: 'itemSectionRenderer' }).contents;
    
    const shelves = this.results.findAll({ type: 'shelfRenderer' }, true);
    const card_list = this.results.get({ type: 'horizontalCardListRenderer' }, true);
    const universal_watch_card = secondary_contents?.get({ type: 'UniversalWatchCard' });
   
    this.refinements = this.#page.refinements || [];
    this.estimated_results = this.#page.estimated_results;
    
    /** @type {{ sections: { title: string, items: object[] }[] }} */
    this.sections = observe(shelves.map((shelf) => ({
      title: shelf.title.toString(),
      items: shelf.content.items
    })));
    
    this.watch_card = {
      /** @type {import('../contents/classes/UniversalWatchCard')} */
      header: universal_watch_card?.header || null,
      /** @type {import('../contents/classes/WatchCardHeroVideo')} */
      call_to_action: universal_watch_card?.call_to_action || null,
      /** @type {import('../contents/classes/WatchCardSectionSequence')[]} */
      sections: universal_watch_card?.sections || []
    }
    
    this.refinement_cards = {
      /** @type {import('../contents/classes/RichListHeader')} */
      header: card_list?.header || null,
      /** @type {import('../contents/classes/SearchRefinementCard')} */
      cards: card_list?.cards || []
    };
    
    this.#continuation = contents.get({ type: 'continuationItemRenderer' });
  }
  
  /**
   * Retrieves next batch of results.
   *
   * @returns {Promise.<Search>}
   */
  async getContinuation() {
    const response = await this.#continuation.endpoint.call(this.#actions);
    return new Search(response, this.#actions, { is_continuation: true });
  }
  
  /**
   * Applies given refinement card and returns a new {@link Search} object.
   *
   * @param {import('../contents/classes/SearchRefinementCard') | string} card - refinement card object or query
   * @returns {Promise.<Search>}
   */
  async selectRefinementCard(card) {
    let target_card;
 
    if (typeof card === 'string') {
      target_card = this.refinement_cards.cards.get({ query: card });
      if (!target_card)
        throw new InnertubeError('Refinement card not found!',
          { available_cards: this.refinement_card_queries }
        );
    } else if (card.type === 'searchRefinementCardRenderer') {
      target_card = card;
    } else {
      throw new InnertubeError('Invalid refinement card!');
    }
    
    const page = await target_card.endpoint.call(this.#actions);
    return new Search(page, this.#actions, { is_continuation: true });
  }
  
  /** @type {boolean} */
  get has_continuation() {
    return !!this.#continuation;
  }
  
  /** @type {string[]} */
  get refinement_card_queries() {
    return this.refinement_cards.cards.map((card) => card.query);
  }
  
  /** @type {import('../contents/classes/Video')[]} */
  get videos() {
    return this.results.findAll({ type: 'videoRenderer' });
  }
 
  /** @type {import('../contents/classes/Playlist')[]} */
  get playlists() {
    return this.results.findAll({ type: 'playlistRenderer' });
  }
  
  get page() {
    return this.#page;
  }
}

module.exports = Search;