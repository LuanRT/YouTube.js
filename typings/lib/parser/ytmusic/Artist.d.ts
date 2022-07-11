export = Artist;
/** @namespace */
declare class Artist {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    header: any;
    /** @type {import('../classes/MusicShelf')[] | import('../classes/MusicCarouselShelf')[]} */
    sections: import('../classes/MusicShelf')[] | import('../classes/MusicCarouselShelf')[];
    getAllSongs(): Promise<any>;
    get page(): any;
    #private;
}
