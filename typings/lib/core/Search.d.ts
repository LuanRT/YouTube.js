export = Search;
/** @namespace */
declare class Search {
    /**
     * @param {object} response - API response.
     * @param {import('./Actions')} actions
     * @constructor
     */
    constructor(response: object);
    estimated_results: any;
    refinements: any;
    #private;
}
