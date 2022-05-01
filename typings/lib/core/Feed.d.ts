export = Feed;
declare class Feed {
    constructor(session: any, data: any, already_parsed?: boolean);
    /**
     * Get the original page data
     */
    get page(): any;
    get session(): import("../Innertube");
    /**
     * Get all the videos in the feed
     * @returns {Array<import('../parser/contents/Video') | import('../parser/contents/GridVideo') | import('../parser/contents/CompactVideo') | import('../parser/contents/PlaylistVideo') | import('../parser/contents/PlaylistPanelVideo')>}
     */
    getVideos(): Array<import('../parser/contents/Video') | import('../parser/contents/GridVideo') | import('../parser/contents/CompactVideo') | import('../parser/contents/PlaylistVideo') | import('../parser/contents/PlaylistPanelVideo')>;
    /**
     * Get all playlists in the feed
     * @returns {Array<import('../parser/contents/Playlist') | import('../parser/contents/GridPlaylist')>}
     */
    getPlaylists(): Array<import('../parser/contents/Playlist') | import('../parser/contents/GridPlaylist')>;
    /**
     * Get all the community posts in the feed
     * @returns {import('../parser/contents/BackstagePost')[]}
     */
    getBackstagePosts(): import('../parser/contents/BackstagePost')[];
    /**
     * Get all the channels in the feed
     * @returns {Array<import('../parser/contents/Channel') | import('../parser/contents/GridChannel')>}
     */
    getChannels(): Array<import('../parser/contents/Channel') | import('../parser/contents/GridChannel')>;
    /**
     * Get unified list of videos
     * @returns {SimpleVideo[]}
     */
    get videos(): SimpleVideo[];
    /**
     * Get unified list of playlists
     * @returns {SimplePlaylist[]}
     */
    get playlists(): SimplePlaylist[];
    get channels(): (import("../parser/contents/Channel") | import("../parser/contents/GridChannel"))[];
    /**
     * Get a list of community posts
     */
    get backstage_posts(): import("../parser/contents/BackstagePost")[];
    get has_continuation(): boolean;
    getContinuationData(): any;
    getContinuation(): Promise<Feed>;
    #private;
}
import SimpleVideo = require("./SimpleVideo");
import SimplePlaylist = require("./SimplePlaylist");
