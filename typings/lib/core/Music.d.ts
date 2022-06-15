export = Music;
/** @namespace */
declare class Music {
    /**
     * @param {import('../Innertube')} session
     */
    constructor(session: import('../Innertube'));
    /**
     * Searches on YouTube Music.
     *
     * @param {string} query
     * @param {object} filters - search filters
     * @param {string} [filters.type] - all | song | video | album | playlist | artist
     * @returns {Promise.<Search>}
     */
    search(query: string, filters: {
        type?: string;
    }): Promise<Search>;
    /**
     * Retrieves YouTube Music home feed.
     *
     * @returns {Promise.<HomeFeed>}
     */
    getHomeFeed(): Promise<HomeFeed>;
    /**
     * Retrieves song lyrics.
     *
     * @param {string} video_id
     */
    getLyrics(video_id: string): Promise<{
        /** @type {string} */
        text: string;
        /** @type {import('../parser/contents/classes/Text')} */
        footer: import('../parser/contents/classes/Text');
    }>;
    /**
     * Retrieves up next.
     *
     * @param {string} video_id
     */
    getUpNext(video_id: string): Promise<{
        /** @type {string} */
        id: string;
        /** @type {string} */
        title: string;
        /** @type {boolean} */
        is_editable: boolean;
        /** @type {import('../parser/contents/classes/PlaylistPanelVideo')[]} */
        items: import('../parser/contents/classes/PlaylistPanelVideo')[];
    }>;
    /**
     * Retrieves related content.
     *
     * @param {string} video_id
     */
    getRelated(video_id: string): Promise<{
        /** @type {Array.<{ header: import('../parser/contents/classes/MusicCarouselShelfBasicHeader'), items: object[] }>} */
        sections: {
            header: import('../parser/contents/classes/MusicCarouselShelfBasicHeader');
            items: object[];
        }[];
        /** @type {string} */
        info: string;
    }>;
    #private;
}
import Search = require("../parser/ytmusic/Search");
import HomeFeed = require("../parser/ytmusic/HomeFeed");
