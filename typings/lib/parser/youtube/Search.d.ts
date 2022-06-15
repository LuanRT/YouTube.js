export = Search;
/** @namespace */
declare class Search extends Feed {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     * @param {object} [already_parsed = false] - already parsed response.
     */
    constructor(actions: import('../../core/Actions'), data: any, already_parsed?: object);
    /** @type {object[]} */
    results: object[];
    refinements: any;
    estimated_results: any;
    watch_card: {
        /** @type {import('../contents/classes/UniversalWatchCard')} */
        header: import('../contents/classes/UniversalWatchCard');
        /** @type {import('../contents/classes/WatchCardHeroVideo')} */
        call_to_action: import('../contents/classes/WatchCardHeroVideo');
        /** @type {import('../contents/classes/WatchCardSectionSequence')[]} */
        sections: import('../contents/classes/WatchCardSectionSequence')[];
    };
    refinement_cards: {
        /** @type {import('../contents/classes/RichListHeader')} */
        header: import('../contents/classes/RichListHeader');
        /** @type {import('../contents/classes/SearchRefinementCard')} */
        cards: import('../contents/classes/SearchRefinementCard');
    };
    /**
     * Applies given refinement card and returns a new {@link Feed} object.
     *
     * @param {import('../contents/classes/SearchRefinementCard') | string} card - refinement card object or query
     * @returns {Promise.<Feed>}
     */
    selectRefinementCard(card: import('../contents/classes/SearchRefinementCard') | string): Promise<Feed>;
    /** @type {string[]} */
    get refinement_card_queries(): string[];
}
import Feed = require("../../core/Feed");
