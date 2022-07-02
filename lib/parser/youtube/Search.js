'use strict';

const Feed = require('../../core/Feed');
const { InnertubeError } = require('../../utils/Utils');

/** @namespace */
class Search extends Feed {
  /**
   * @param {import('../../core/Actions')} actions
   * @param {object} data - API response data.
   * @param {boolean} [already_parsed] - already parsed response.
   */
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);

    const contents = this.page.contents?.primary_contents.contents
      || this.page.on_response_received_commands[0].contents;

    const secondary_contents = this.page.contents?.secondary_contents?.contents;

    /** @type {object[]} */
    this.results = contents.get({ type: 'ItemSection' }).contents;

    const card_list = this.results.get({ type: 'HorizontalCardList' }, true);
    const universal_watch_card = secondary_contents?.get({ type: 'UniversalWatchCard' });

    this.refinements = this.page.refinements || [];
    this.estimated_results = this.page.estimated_results;

    this.watch_card = {
      /** @type {import('../contents/classes/UniversalWatchCard')} */
      header: universal_watch_card?.header || null,
      /** @type {import('../contents/classes/WatchCardHeroVideo')} */
      call_to_action: universal_watch_card?.call_to_action || null,
      /** @type {import('../contents/classes/WatchCardSectionSequence')[]} */
      sections: universal_watch_card?.sections || []
    };

    this.refinement_cards = {
      /** @type {import('../contents/classes/RichListHeader')} */
      header: card_list?.header || null,
      /** @type {import('../contents/classes/SearchRefinementCard')} */
      cards: card_list?.cards || []
    };
  }

  /**
   * Applies given refinement card and returns a new {@link Search} object.
   *
   * @param {import('../contents/classes/SearchRefinementCard') | string} card - refinement card object or query
   * @returns {Promise.<Feed>}
   */
  async selectRefinementCard(card) {
    let target_card;

    if (typeof card === 'string') {
      target_card = this.refinement_cards.cards.get({ query: card });
      if (!target_card)
        throw new InnertubeError('Refinement card not found!',
          { available_cards: this.refinement_card_queries }
        );
    } else if (card.type === 'SearchRefinementCard') {
      target_card = card;
    } else {
      throw new InnertubeError('Invalid refinement card!');
    }

    const page = await target_card.endpoint.call(this.actions);
    return new Search(this.actions, page, true);
  }

  /** @type {string[]} */
  get refinement_card_queries() {
    return this.refinement_cards.cards.map((card) => card.query);
  }

  /**
   * Retrieves next batch of results.
   *
   * @returns {Promise.<Search>}
   */
  async getContinuation() {
    const continuation = await this.getContinuationData();
    return new Search(this.actions, continuation, true);
  }
}

module.exports = Search;