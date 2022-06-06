export = Search;
/** @namespace */
declare class Search {
    /**
     * @param {object} response - API response.
     * @param {import('./Actions')} actions
     * @param {boolean} is_continuation
     * @constructor
     */
    constructor(response: object, actions: import('./Actions'), is_continuation: boolean);
    estimated_results: any;
    refinements: any;
    results: any;
    getContinuation(): Promise<Search>;
    get has_continuation(): boolean;
    get videos(): any;
    get playlists(): any;
    get page(): any;
    #private;
}
