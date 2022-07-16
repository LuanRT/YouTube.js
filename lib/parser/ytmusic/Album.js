import Parser from "../index";

/** @namespace */
class Album {
    #page;
    #actions;
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions').default} actions
     */
    constructor(response, actions) {
        this.#page = Parser.parseResponse(response.data);
        this.#actions = actions;
        /** @type {import('../classes/MusicDetailHeader')[]} */
        this.header = this.#page.header;
        /** @type {string} */
        this.url = this.#page.microformat.url_canonical;
        /** @type {import('../classes/MusicResponsiveListItem')[]} */
        this.contents = this.#page.contents_memo.get('MusicShelf')?.[0].contents;
        this.sections = this.#page.contents_memo.get('MusicCarouselShelf') || [];
    }
    get page() {
        return this.#page;
    }
}
export default Album;
