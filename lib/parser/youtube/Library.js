import Parser from "../index.js";
import History from "./History.js";
import Playlist from "./Playlist.js";
import Feed from "../../core/Feed.js";
import utils from "../../utils/Utils.js";

const { observe } = utils;
/** @namespace */
class Library {
    #actions;
    #page;
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response, actions) {
        this.#actions = actions;
        this.#page = Parser.parseResponse(response);
        const tab = this.#page.contents.tabs.get({ selected: true });
        const shelves = tab.content.contents.map((section) => section.contents[0]);
        const stats = this.#page.contents.secondary_contents.items.get({ type: 'ProfileColumnStats' }).items;
        const user_info = this.#page.contents.secondary_contents.items.get({ type: 'ProfileColumnUserInfo' });
        this.profile = { stats, user_info };
        /** @type {{ type: string, title: import('../classes/Text'), contents: object[], getAll: Promise.<Playlist | History | Feed> }[] } */
        this.sections = observe(shelves.map((shelf) => ({
            type: shelf.icon_type,
            title: shelf.title,
            contents: shelf.content.items,
            getAll: () => this.#getAll(shelf)
        })));
    }
    async #getAll(shelf) {
        if (!shelf.menu?.top_level_buttons)
            throw new Error(`The ${shelf.title.text} section doesn't have more items`);
        const button = await shelf.menu.top_level_buttons.get({ text: 'See all' });
        const page = await button.endpoint.call(this.#actions);
        switch (shelf.icon_type) {
            case 'LIKE':
            case 'WATCH_LATER':
                return new Playlist(this.#actions, page, true);
            case 'WATCH_HISTORY':
                return new History(this.#actions, page, true);
            case 'CONTENT_CUT':
                return new Feed(this.#actions, page, true);
            default:
        }
    }
    get history() {
        return this.sections.get({ type: 'WATCH_HISTORY' });
    }
    get watch_later() {
        return this.sections.get({ type: 'WATCH_LATER' });
    }
    get liked_videos() {
        return this.sections.get({ type: 'LIKE' });
    }
    get playlists() {
        return this.sections.get({ type: 'PLAYLISTS' });
    }
    get clips() {
        return this.sections.get({ type: 'CONTENT_CUT' });
    }
    get page() {
        return this.#page;
    }
}
export default Library;
