export = History;
/** @namespace */
declare class History {
    /**
     * @param {object} page - parsed data.
     * @param {import('../../core/Actions')} actions
     * @param {boolean} is_continuation
     * @constructor
     */
    constructor(page: object, actions: import('../../core/Actions'), is_continuation: boolean);
    sections: any;
    getContinuation(): Promise<History>;
    get has_continuation(): boolean;
    get page(): any;
    #private;
}
