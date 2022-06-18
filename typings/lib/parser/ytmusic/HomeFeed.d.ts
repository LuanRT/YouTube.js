export = HomeFeed;
/** @namespace */
declare class HomeFeed {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    /** @type {import('../contents/classes/MusicCarouselShelf')[]} */
    sections: import('../contents/classes/MusicCarouselShelf')[];
    /**
     * Retrieves home feed continuation.
     *
     * @returns {Promise.<HomeFeed>}
     */
    getContinuation(): Promise<HomeFeed>;
    #private;
}
