import utils from "../utils/Utils.js";
import Feed from "./Feed.js";

const { InnertubeError } = utils;
class TabbedFeed extends Feed {
    /**
     * @type {import('../parser/contents/classes/Tab')[]}
     */
    #tabs;
    #actions;
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        this.#actions = actions;
        this.#tabs = this.page.contents_memo.get('Tab');
    }
    get tabs() {
        return this.#tabs.map((tab) => tab.title.toString());
    }
    /**
     * @param {string} title
     * @returns {Promise<TabbedFeed>}
     */
    async getTab(title) {
        const tab = this.#tabs.find((tab) => tab.title.toLowerCase() === title.toLowerCase());
        if (!tab)
            throw new InnertubeError(`Tab "${title}" not found`);
        if (tab.selected)
            return this;
        const response = await tab.endpoint.call(this.#actions);
        return new TabbedFeed(this.#actions, response, true);
    }
    get title() {
        return this.page.contents_memo('Tab')?.find((tab) => tab.selected)?.title.toString();
    }
}
export default TabbedFeed;
