export = Album;
/** @namespace */
declare class Album {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    /** @type {import('../contents/classes/MusicDetailHeader')[]} */
    header: import('../contents/classes/MusicDetailHeader')[];
    /** @type {string} */
    url: string;
    /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
    contents: import('../contents/classes/MusicResponsiveListItem')[];
    sections: any;
    get page(): any;
    #private;
}
