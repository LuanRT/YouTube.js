import Parser from "../index.js";

/** @namespace */
class Explore {
    #page;
    /**
     * @param {object} response - API response.
     */
    constructor(response) {
        this.#page = Parser.parseResponse(response.data);
        const tab = this.page.contents.tabs.get({ selected: true });
        this.top_buttons = tab.content.contents.get({ type: 'Grid' }).items;
        this.sections = tab.content.contents.findAll({ type: 'MusicCarouselShelf' });
    }
    get page() {
        return this.#page;
    }
}
export default Explore;
