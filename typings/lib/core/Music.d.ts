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
    #private;
}
import Search = require("../parser/ytmusic/Search");
