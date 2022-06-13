export = Music;
/** @namespace */
declare class Music {
    /**
     * @param {Innertube} session
     * @constructor
     */
    constructor(session: Innertube);
    /**
     * Search on YouTube Music.
     *
     * @param {string} query
     * @param {object} filters - search filters
     * @param {string} [filters.type] - all | song | video | album | playlist | artist
     *
     * @returns {Promise.<Search>}
     */
    search(query: string, filters: {
        type?: string;
    }): Promise<Search>;
    /**
     * Retrieves song lyrics.
     * @param {string} video_id
     */
    getLyrics(video_id: string): Promise<{
        /** @type {string} */
        text: string;
        /** @type {Text} */
        footer: Text;
    }>;
    /**
     * Retrieves up next.
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
     * @param {string} video_id
     */
    getRelated(video_id: string): Promise<{
        /** @type {{ header: import('../parser/contents/classes/MusicCarouselShelfBasicHeader'); items: object[]; }[]} */
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
