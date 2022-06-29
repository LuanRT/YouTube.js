export = Artist;
/** @namespace */
declare class Artist {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    header: any;
    /** @type {import('../contents/classes/MusicShelf')[] | import('../contents/classes/MusicCarouselShelf')[]} */
    sections: import('../contents/classes/MusicShelf')[] | import('../contents/classes/MusicCarouselShelf')[];
    getAllSongs(): Promise<any>;
    get page(): any;
    #private;
}
