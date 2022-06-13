'use strict';

const Parser = require('../contents');
const { InnertubeError } = require('../../utils/Utils');
  
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
   * @constructor
   */
  constructor(response, actions, args = {}) {
    this.#actions = actions;
   
    this.#page = args.is_continuation
      && response 
      || Parser.parseResponse(response.data);
    
    const contents = this.#page.contents?.primary_contents.contents
      || this.#page.on_response_received_commands[0].continuation_items;
    
    this.results = contents.get({ type: 'itemSectionRenderer' }).contents;
    
    const shelves = this.results.findAll({ type: 'shelfRenderer' }, true);
    const card_list = this.results.get({ type: 'horizontalCardListRenderer' }, true);
    
    this.refinements = this.#page.refinements || [];
    this.estimated_results = this.#page.estimated_results;
    
    this.sections = shelves.map((shelf) => ({
      title: shelf.title.toString(),
      items: shelf.content.items
    }));
    
    this.refinement_cards = {
      header: card_list?.header || null,
      cards: card_list?.cards || []
    };
    
    this.#continuation = contents.get({ type: 'continuationItemRenderer' });
  }
  
  async getContinuation() {
    const response = await this.#continuation.endpoint.call(this.#actions);
    return new Search(response, this.#actions, { is_continuation: true });
  }
  
  /**
   * Applies given refinement card and returns a new {@link Search} object.
   * @param {SearchRefinementCard || string} refinement card object or query
   * @returns {Search}
   */
  async selectRefinementCard(card) {
    let target_card;
 
    if (typeof card === 'string') {
      target_card = this.refinement_cards.cards.get({ query: card });
      if (!target_card)
        throw new InnertubeError('Refinement card not found!',
          { available_cards: this.refinement_card_query_list }
        );
    } else if (card.type === 'searchRefinementCardRenderer') {
      target_card = card;
    } else {
      throw new InnertubeError('Invalid refinement card!');
    }
    
    const page = await target_card.endpoint.call(this.#actions);
    return new Search(page, this.#actions, { is_continuation: true });
  }
  
  get has_continuation() {
    return !!this.#continuation;
  }
  
  get refinement_card_queries() {
    return this.refinement_cards.cards.map((card) => card.query);
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