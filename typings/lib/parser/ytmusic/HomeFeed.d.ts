export = HomeFeed;
/** @namespace */
declare class HomeFeed {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    /** @type {import('../classes/MusicCarouselShelf')[]} */
    sections: import('../classes/MusicCarouselShelf')[];
    /**
     * Retrieves home feed continuation.
     *
     * @returns {Promise.<HomeFeed>}
     */
    getContinuation(): Promise<HomeFeed>;
    get page(): any;
    #private;
}
