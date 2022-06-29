export = Library;
/** @namespace */
declare class Library {
    /**
     * @param {object} response - API response.
     */
    constructor(response: object);
    get page(): any;
    #private;
}
