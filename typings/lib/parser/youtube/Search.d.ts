export = Search;
/** @namespace */
declare class Search extends Feed {
    /**
     * @param {import('../../core/Actions')} actions
     * @param {object} data - API response data.
     * @param {boolean} [already_parsed] - already parsed response.
     */
    constructor(actions: import('../../core/Actions'), data: object, already_parsed?: boolean);
    /** @type {object[]} */
    results: object[];
    refinements: any;
    estimated_results: any;
    watch_card: {
        /** @type {import('../classes/UniversalWatchCard')} */
        header: import('../classes/UniversalWatchCard');
        /** @type {import('../classes/WatchCardHeroVideo')} */
        call_to_action: import('../classes/WatchCardHeroVideo');
        /** @type {import('../classes/WatchCardSectionSequence')[]} */
        sections: import('../classes/WatchCardSectionSequence')[];
    };
    refinement_cards: {
        /** @type {import('../classes/RichListHeader')} */
        header: import('../classes/RichListHeader');
        /** @type {import('../classes/SearchRefinementCard')} */
        cards: import('../classes/SearchRefinementCard');
    };
    /**
     * Applies given refinement card and returns a new {@link Search} object.
     *
     * @param {import('../classes/SearchRefinementCard') | string} card - refinement card object or query
     * @returns {Promise.<Feed>}
     */
    selectRefinementCard(card: import('../classes/SearchRefinementCard') | string): Promise<Feed>;
    /** @type {string[]} */
    get refinement_card_queries(): string[];
    /**
     * Retrieves next batch of results.
     *
     * @returns {Promise.<Search>}
     */
    getContinuation(): Promise<Search>;
}
import Feed = require("../../core/Feed");
