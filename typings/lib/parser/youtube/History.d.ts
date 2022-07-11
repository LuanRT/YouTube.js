export = History;
/** @namespace */
declare class History extends Feed {
    /**
     * @param {import('../../core/Actions')} actions
     * @param {object} data - parsed data.
     * @param {boolean} already_parsed
     */
    constructor(actions: import('../../core/Actions'), data: object, already_parsed?: boolean);
    /** @type {import('../classes/ItemSection')[]} */
    sections: import('../classes/ItemSection')[];
    /** @type {import('../classes/BrowseFeedActions')[]} */
    feed_actions: import('../classes/BrowseFeedActions')[];
    /**
     * Retrieves next batch of contents.
     *
     * @returns {Promise.<History>}
     */
    getContinuation(): Promise<History>;
}
import Feed = require("../../core/Feed");
