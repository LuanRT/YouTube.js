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
    results: any;
    refinements: any;
    estimated_results: any;
    sections: any;
    refinement_cards: {
        header: any;
        cards: any;
    };
    getContinuation(): Promise<Search>;
    /**
     * Applies given refinement card and returns a new {@link Search} object.
     * @param {SearchRefinementCard || string} refinement card object or query
     * @returns {Search}
     */
    selectRefinementCard(card: any): Search;
    get has_continuation(): boolean;
    get refinement_card_queries(): any;
    get videos(): any;
    get playlists(): any;
    get page(): any;
    #private;
}
