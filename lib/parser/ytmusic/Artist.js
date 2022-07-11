import Parser from "../index.js";
import utils from "../../utils/Utils.js";

const { observe } = utils;
/** @namespace */
class Artist {
    #page;
    #actions;
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response, actions) {
        this.#page = Parser.parseResponse(response.data);
        this.#actions = actions;
        this.header = this.page.header;
        const music_shelf = this.#page.contents_memo.get('MusicShelf');
        const music_carousel_shelf = this.#page.contents_memo.get('MusicCarouselShelf');
        /** @type {import('../classes/MusicShelf')[] | import('../classes/MusicCarouselShelf')[]} */
        this.sections = observe([...music_shelf, ...music_carousel_shelf]);
    }
    async getAllSongs() {
        const shelf = this.sections.get({ type: 'MusicShelf' });
        const page = await shelf.endpoint.call(this.#actions, 'YTMUSIC');
        return page.contents_memo.get('MusicPlaylistShelf')?.[0] || [];
    }
    get page() {
        return this.#page;
    }
}
export default Artist;
