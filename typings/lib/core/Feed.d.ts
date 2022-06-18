export = Feed;
declare class Feed {
    /**
     * Get all videos on a given page via memo
     *
     * @param {Map<string, any[]>} memo
     * @returns {Array<import('../parser/contents/classes/Video') | import('../parser/contents/classes/GridVideo') | import('../parser/contents/classes/CompactVideo') | import('../parser/contents/classes/PlaylistVideo') | import('../parser/contents/classes/PlaylistPanelVideo') | import('../parser/contents/classes/WatchCardCompactVideo')>}
     */
    static getVideosFromMemo(memo: Map<string, any[]>): Array<import('../parser/contents/classes/Video') | import('../parser/contents/classes/GridVideo') | import('../parser/contents/classes/CompactVideo') | import('../parser/contents/classes/PlaylistVideo') | import('../parser/contents/classes/PlaylistPanelVideo') | import('../parser/contents/classes/WatchCardCompactVideo')>;
    /**
     * Get all playlists on a given page via memo
     *
     * @param {Map<string, any[]>} memo
     * @returns {Array<import('../parser/contents/classes/Playlist') | import('../parser/contents/classes/GridPlaylist')>}
     */
    static getPlaylistsFromMemo(memo: Map<string, any[]>): Array<import('../parser/contents/classes/Playlist') | import('../parser/contents/classes/GridPlaylist')>;
    constructor(actions: any, data: any, already_parsed?: boolean);
    memo: any;
    /**
     * Get the original page data
     */
    get page(): any;
    get actions(): import("../core/Actions");
    /**
     * Get all the videos in the feed
     */
    get videos(): (import("../parser/contents/classes/Video") | import("../parser/contents/classes/GridVideo") | import("../parser/contents/classes/CompactVideo") | import("../parser/contents/classes/PlaylistVideo") | import("../parser/contents/classes/PlaylistPanelVideo") | import("../parser/contents/classes/WatchCardCompactVideo"))[];
    /**
     * Get all playlists in the feed
     *
     * @returns {Array<import('../parser/contents/classes/Playlist') | import('../parser/contents/classes/GridPlaylist')>}
     */
    get playlists(): (import("../parser/contents/classes/Playlist") | import("../parser/contents/classes/GridPlaylist"))[];
    /**
     * Get all the community posts in the feed
     *
     * @returns {import('../parser/contents/classes/BackstagePost')[]}
     */
    get backstage_posts(): import("../parser/contents/classes/BackstagePost")[];
    /**
     * Get all the channels in the feed
     *
     * @returns {Array<import('../parser/contents/Channel') | import('../parser/contents/GridChannel')>}
     */
    get channels(): any[];
    get has_continuation(): boolean;
    getContinuationData(): any;
    get shelves(): any;
    getShelf(title: any): any;
    get shelf_content(): any;
    getContinuation(): Promise<Feed>;
    #private;
}
