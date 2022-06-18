export = History;
/** @namespace */
declare class History {
    /**
     * @param {object} page - parsed data.
     * @param {import('../../core/Actions')} actions
     * @param {boolean} is_continuation
     */
    constructor(page: object, actions: import('../../core/Actions'), is_continuation: boolean);
    feed_actions: any;
    sections: any;
    getContinuation(): Promise<History>;
    get has_continuation(): boolean;
    get page(): any;
    #private;
}
