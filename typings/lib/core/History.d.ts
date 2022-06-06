export = History;
/** @namespace */
declare class History {
    /**
     * @param {object} page - parsed data.
     * @param {import('./Actions')} actions
     * @param {boolean} is_continuation
     * @constructor
     */
    constructor(page: object, actions: import('./Actions'), is_continuation: boolean);
    sections: any;
    getContinuation(): Promise<History>;
    get has_continuation(): boolean;
    get page(): any;
    #private;
}
