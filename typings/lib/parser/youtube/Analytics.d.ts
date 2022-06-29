export = Analytics;
/** @namespace */
declare class Analytics {
    /**
     * @param {object} response - API response.
     */
    constructor(response: object);
    sections: any;
    get page(): any;
    #private;
}
