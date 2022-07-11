export = Feed;
declare class Feed {
    /**
     * Get all videos on a given page via memo
     *
     * @param {Map<string, any[]>} memo
     * @returns {Array<import('../parser/classes/Video') | import('../parser/classes/GridVideo') | import('../parser/classes/CompactVideo') | import('../parser/classes/PlaylistVideo') | import('../parser/classes/PlaylistPanelVideo') | import('../parser/classes/WatchCardCompactVideo')>}
     */
    static getVideosFromMemo(memo: Map<string, any[]>): Array<import('../parser/classes/Video') | import('../parser/classes/GridVideo') | import('../parser/classes/CompactVideo') | import('../parser/classes/PlaylistVideo') | import('../parser/classes/PlaylistPanelVideo') | import('../parser/classes/WatchCardCompactVideo')>;
    /**
     * Get all playlists on a given page via memo
     *
     * @param {Map<string, any[]>} memo
     * @returns {Array<import('../parser/classes/Playlist') | import('../parser/classes/GridPlaylist')>}
     */
    static getPlaylistsFromMemo(memo: Map<string, any[]>): Array<import('../parser/classes/Playlist') | import('../parser/classes/GridPlaylist')>;
    constructor(actions: any, data: any, already_parsed?: boolean);
    /**
     * Get all the videos in the feed
     */
    get videos(): (import("../parser/classes/CompactVideo") | import("../parser/classes/GridVideo") | import("../parser/classes/PlaylistPanelVideo") | import("../parser/classes/PlaylistVideo") | import("../parser/classes/Video") | import("../parser/classes/WatchCardCompactVideo"))[];
    /**
     * Get all the community posts in the feed
     *
     * @returns {import('../parser/classes/BackstagePost')[] | import('../parser/classes/Post')[]}
     */
    get posts(): import("../parser/classes/BackstagePost")[] | import("../parser/classes/Post")[];
    /**
     * Get all the channels in the feed
     *
     * @returns {Array<import('../parser/contents/Channel') | import('../parser/contents/GridChannel')>}
     */
    get channels(): any[];
    /**
     * Get all playlists in the feed
     *
     * @returns {Array<import('../parser/classes/Playlist') | import('../parser/classes/GridPlaylist')>}
     */
    get playlists(): (import("../parser/classes/Playlist") | import("../parser/classes/GridPlaylist"))[];
    get memo(): any;
    /**
     * Returns contents from the page.
     *
     * @returns {*}
     */
    get contents(): any;
    /**
     * Returns all segments/sections from the page.
     *
     * @returns {import('../parser/contents/Shelf')[] | import('../parser/contents/RichShelf')[] | import('../parser/contents/ReelShelf')[]}
     */
    get shelves(): any[];
    /**
     * Finds shelf by title.
     *
     * @param {string} title
     */
    getShelf(title: string): any;
    /**
     * Returns secondary contents from the page.
     *
     * @returns {*}
     */
    get secondary_contents(): any;
    get actions(): import("../core/Actions");
    /**
     * Get the original page data
     */
    get page(): any;
    /**
     * Checks if the feed has continuation.
     *
     * @returns {boolean}
     */
    get has_continuation(): boolean;
    /**
     * Retrieves continuation data as it is.
     *
     * @returns {Promise.<any>}
     */
    getContinuationData(): Promise<any>;
    /**
     * Retrieves next batch of contents and returns a new {@link Feed} object.
     *
     * @returns {Promise.<Feed>}
     */
    getContinuation(): Promise<Feed>;
    #private;
}
