export = HomeFeed;
/** @namespace */
declare class HomeFeed {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    /** @type {{ sections: { header: import('../contents/classes/MusicCarouselShelfBasicHeader'), items: object[] }[] }} */
    sections: {
        sections: {
            header: import('../contents/classes/MusicCarouselShelfBasicHeader');
            items: object[];
        }[];
    };
    /**
     * Retrieves home feed continuation.
     * @returns {Promise.<HomeFeed>}
     */
    getContinuation(): Promise<HomeFeed>;
    #private;
}
