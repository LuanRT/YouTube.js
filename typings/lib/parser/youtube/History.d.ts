export = History;
/** @namespace */
declare class History extends Feed {
    /**
     * @param {import('../../core/Actions')} actions
     * @param {object} data - parsed data.
     * @param {boolean} already_parsed
     */
    constructor(actions: import('../../core/Actions'), data: object, already_parsed?: boolean);
    sections: any;
    feed_actions: any;
    /**
     * Retrieves next batch of contents.
     *
     * @returns {Promise.<History>}
     */
    getContinuation(): Promise<History>;
}
import Feed = require("../../core/Feed");
