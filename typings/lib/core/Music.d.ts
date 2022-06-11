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
     * @returns {Promise.<{ text: string; footer: Text }>}
     */
    getLyrics(video_id: string): Promise<{
        text: string;
        footer: Text;
    }>;
    /**
     * Retrieves related content.
     * @param {string} video_id
     * @returns {Promise.<{ sections: { header: import('../parser/contents/classes/MusicCarouselShelfBasicHeader'); items: any[]; }[]; info: string }>}
     */
    getRelated(video_id: string): Promise<{
        sections: {
            header: import('../parser/contents/classes/MusicCarouselShelfBasicHeader');
            items: any[];
        }[];
        info: string;
    }>;
    #private;
}
import Search = require("../parser/ytmusic/Search");
