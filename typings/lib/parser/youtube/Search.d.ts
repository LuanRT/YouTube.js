export = Search;
/** @namespace */
declare class Search {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     * @param {object} [args]
     * @param {boolean} [args.is_continuation]
     * @constructor
     */
    constructor(response: object, actions: import('../../core/Actions'), args?: {
        is_continuation?: boolean;
    });
    /** @type {object[]} */
    results: object[];
    refinements: any;
    estimated_results: any;
    /** @type {{ sections: { title: string; items: object[]; }[] }} */
    sections: {
        sections: {
            title: string;
            items: object[];
        }[];
    };
    refinement_cards: {
        /** @type {import('../contents/classes/RichListHeader')} */
        header: import('../contents/classes/RichListHeader');
        /** @type {import('../contents/classes/SearchRefinementCard')} */
        cards: import('../contents/classes/SearchRefinementCard');
    };
    /**
     * Retrieves next batch of results.
     * @returns {Promise.<Search>}
     */
    getContinuation(): Promise<Search>;
    /**
     * Applies given refinement card and returns a new {@link Search} object.
     * @param {SearchRefinementCard | string} card - refinement card object or query
     * @returns {Promise.<Search>}
     */
    selectRefinementCard(card: SearchRefinementCard | string): Promise<Search>;
    /** @type {boolean} */
    get has_continuation(): boolean;
    /** @type {string[]} */
    get refinement_card_queries(): string[];
    /** @type {import('../contents/classes/Video')[]} */
    get videos(): import("../contents/classes/Video")[];
    /** @type {import('../contents/classes/Playlist')[]} */
    get playlists(): import("../contents/classes/Playlist")[];
    get page(): any;
    #private;
}
