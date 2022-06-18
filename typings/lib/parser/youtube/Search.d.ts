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
     * Applies given refinement card and returns a new {@link Search} object.
     *
     * @param {import('../contents/classes/SearchRefinementCard') | string} card - refinement card object or query
     * @returns {Promise.<Feed>}
     */
    selectRefinementCard(card: import('../contents/classes/SearchRefinementCard') | string): Promise<Feed>;
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
