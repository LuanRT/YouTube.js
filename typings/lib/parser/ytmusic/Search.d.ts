export = Search;
/** @namespace */
declare class Search {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     * @param {object} args
     * @param {boolean} args.is_continuation
     * @param {boolean} args.is_filtered
     */
    constructor(response: object, actions: import('../../core/Actions'), args?: {
        is_continuation: boolean;
        is_filtered: boolean;
    });
    /**
     * @type {import('../classes/DidYouMean')}
     */
    did_you_mean: import('../classes/DidYouMean');
    /**
     * @type {import('../classes/ShowingResultsFor')}
     */
    showing_results_for: import('../classes/ShowingResultsFor');
    results: any;
    /** @type {{ title: string; items: object[]; getMore: Promise.<Search>; }} */
    sections: {
        title: string;
        items: object[];
        getMore: Promise<Search>;
    };
    /**
     * Retrieves continuation, only works for individual sections or filtered results.
     *
     * @returns {Promise.<Search>}
     */
    getContinuation(): Promise<Search>;
    /**
     * Applies given filter to the search.
     *
     * @param {string} name
     * @returns {Promise.<Search>}
     */
    selectFilter(name: string): Promise<Search>;
    /** @type {boolean} */
    get has_continuation(): boolean;
    /** @type {string[]} */
    get filters(): string[];
    /** @type {import('../classes/MusicResponsiveListItem')[]} */
    get songs(): import("../classes/MusicResponsiveListItem")[];
    /** @type {import('../classes/MusicResponsiveListItem')[]} */
    get videos(): import("../classes/MusicResponsiveListItem")[];
    /** @type {import('../classes/MusicResponsiveListItem')[]} */
    get albums(): import("../classes/MusicResponsiveListItem")[];
    /** @type {import('../classes/MusicResponsiveListItem')[]} */
    get artists(): import("../classes/MusicResponsiveListItem")[];
    /** @type {import('../classes/MusicResponsiveListItem')[]} */
    get playlists(): import("../classes/MusicResponsiveListItem")[];
    get page(): any;
    #private;
}
