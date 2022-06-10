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
     * @param {string} query
     * @returns {Promise.<Search>}
     */
    search(query: string): Promise<Search>;
    #private;
}
import Search = require("../parser/ytmusic/Search");
