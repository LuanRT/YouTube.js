import Parser from "../parser/index.js";
import utils from "../utils/Utils.js";

const { InnertubeError } = utils;
// TODO: add a way subdivide into sections and return subfeeds?
class Feed {
    #page;
    /** @type {import('../parser/classes/ContinuationItem')[]} */
    #continuation;
    /** @type {import('../core/Actions').default} */
    #actions;
    #memo;
    constructor(actions, data, already_parsed = false) {
        if (data.on_response_received_actions || data.on_response_received_endpoints || already_parsed) {
            this.#page = data;
        }
        else {
            this.#page = Parser.parseResponse(data);
        }
        this.#memo =
            this.#page.on_response_received_commands ?
                this.#page.on_response_received_commands_memo :
                this.#page.on_response_received_endpoints ?
                    this.#page.on_response_received_endpoints_memo :
                    this.#page.contents ?
                        this.#page.contents_memo :
                        this.#page.on_response_received_actions ?
                            this.#page.on_response_received_actions_memo : [];
        this.#actions = actions;
    }
    /**
     * Get all videos on a given page via memo
     *
     * @param {Map<string, any[]>} memo
     * @returns {Array<import('../parser/classes/Video') | import('../parser/classes/GridVideo') | import('../parser/classes/CompactVideo') | import('../parser/classes/PlaylistVideo') | import('../parser/classes/PlaylistPanelVideo') | import('../parser/classes/WatchCardCompactVideo')>}
     */
    static getVideosFromMemo(memo) {
        const videos = memo.get('Video') || [];
        const grid_videos = memo.get('GridVideo') || [];
        const compact_videos = memo.get('CompactVideo') || [];
        const playlist_videos = memo.get('PlaylistVideo') || [];
        const playlist_panel_videos = memo.get('PlaylistPanelVideo') || [];
        const watch_card_compact_videos = memo.get('WatchCardCompactVideo') || [];
        return [
            ...videos,
            ...grid_videos,
            ...compact_videos,
            ...playlist_videos,
            ...playlist_panel_videos,
            ...watch_card_compact_videos
        ];
    }
    /**
     * Get all playlists on a given page via memo
     *
     * @param {Map<string, any[]>} memo
     * @returns {Array<import('../parser/classes/Playlist') | import('../parser/classes/GridPlaylist')>}
     */
    static getPlaylistsFromMemo(memo) {
        const playlists = memo.get('Playlist') || [];
        const grid_playlists = memo.get('GridPlaylist') || [];
        return [...playlists, ...grid_playlists];
    }
    /**
     * Get all the videos in the feed
     */
    get videos() {
        return Feed.getVideosFromMemo(this.#memo);
    }
    /**
     * Get all the community posts in the feed
     *
     * @returns {import('../parser/classes/BackstagePost')[] | import('../parser/classes/Post')[]}
     */
    get posts() {
        return this.#memo.get('BackstagePost') || this.#memo.get('Post') || [];
    }
    /**
     * Get all the channels in the feed
     *
     * @returns {Array<import('../parser/contents/Channel') | import('../parser/contents/GridChannel')>}
     */
    get channels() {
        const channels = this.#memo.get('Channel') || [];
        const grid_channels = this.#memo.get('GridChannel') || [];
        return [...channels, ...grid_channels];
    }
    /**
     * Get all playlists in the feed
     *
     * @returns {Array<import('../parser/classes/Playlist') | import('../parser/classes/GridPlaylist')>}
     */
    get playlists() {
        return Feed.getPlaylistsFromMemo(this.#memo);
    }
    get memo() {
        return this.#memo;
    }
    /**
     * Returns contents from the page.
     *
     * @returns {*}
     */
    get contents() {
        const tab_content = this.#memo.get('Tab')?.[0]?.content;
        const reload_continuation_items = this.#memo.get('reloadContinuationItemsCommand')?.[0];
        const append_continuation_items = this.#memo.get('appendContinuationItemsAction')?.[0];
        return tab_content || reload_continuation_items || append_continuation_items;
    }
    /**
     * Returns all segments/sections from the page.
     *
     * @returns {import('../parser/contents/Shelf')[] | import('../parser/contents/RichShelf')[] | import('../parser/contents/ReelShelf')[]}
     */
    get shelves() {
        const shelf = this.#memo.get('Shelf') || [];
        const rich_shelf = this.#memo.get('RichShelf') || [];
        const reel_shelf = this.#memo.get('ReelShelf') || [];
        return [...shelf, ...rich_shelf, ...reel_shelf];
    }
    /**
     * Finds shelf by title.
     *
     * @param {string} title
     */
    getShelf(title) {
        return this.shelves.find((shelf) => shelf.title.toString() === title);
    }
    /**
     * Returns secondary contents from the page.
     *
     * @returns {*}
     */
    get secondary_contents() {
        return this.page.contents?.secondary_contents;
    }
    get actions() {
        return this.#actions;
    }
    /**
     * Get the original page data
     */
    get page() {
        return this.#page;
    }
    /**
     * Checks if the feed has continuation.
     *
     * @returns {boolean}
     */
    get has_continuation() {
        return (this.#memo.get('ContinuationItem') || []).length > 0;
    }
    /**
     * Retrieves continuation data as it is.
     *
     * @returns {Promise.<any>}
     */
    async getContinuationData() {
        if (this.#continuation) {
            if (this.#continuation.length > 1)
                throw new InnertubeError('There are too many continuations, you\'ll need to find the correct one yourself in this.page');
            if (this.#continuation.length === 0)
                throw new InnertubeError('There are no continuations');
            const response = await this.#continuation[0].endpoint.call(this.#actions);
            return response;
        }
        this.#continuation = this.#memo.get('ContinuationItem');
        if (this.#continuation)
            return this.getContinuationData();
        return null;
    }
    /**
     * Retrieves next batch of contents and returns a new {@link Feed} object.
     *
     * @returns {Promise.<Feed>}
     */
    async getContinuation() {
        const continuation_data = await this.getContinuationData();
        return new Feed(this.actions, continuation_data, true);
    }
}
export default Feed;
