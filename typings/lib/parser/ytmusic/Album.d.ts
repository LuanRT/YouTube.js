export = Album;
/** @namespace */
declare class Album {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    /** @type {import('../classes/MusicDetailHeader')[]} */
    header: import('../classes/MusicDetailHeader')[];
    /** @type {string} */
    url: string;
    /** @type {import('../classes/MusicResponsiveListItem')[]} */
    contents: import('../classes/MusicResponsiveListItem')[];
    sections: any;
    get page(): any;
    #private;
}
