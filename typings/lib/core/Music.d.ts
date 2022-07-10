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
     * Retrieves the home feed.
     *
     * @returns {Promise.<HomeFeed>}
     */
    getHomeFeed(): Promise<HomeFeed>;
    /**
     * Retrieves the Explore feed.
     *
     * @returns {Promise.<Explore>}
     */
    getExplore(): Promise<Explore>;
    /**
     * Retrieves the Library.
     *
     * @returns {Promise.<Library>}
     */
    getLibrary(): Promise<Library>;
    /**
     * Retrieves artist's info & content.
     *
     * @param {string} artist_id
     * @returns {Promise.<Artist>}
     */
    getArtist(artist_id: string): Promise<Artist>;
    /**
     * Retrieves album.
     *
     * @param {string} album_id
     * @returns {Promise.<Album>}
     */
    getAlbum(album_id: string): Promise<Album>;
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
        contents: import('../parser/contents/classes/PlaylistPanelVideo')[];
    }>;
    /**
     * Retrieves related content.
     *
     * @param {string} video_id
     */
    getRelated(video_id: string): Promise<{
        /** @type {import('../parser/contents/classes/MusicCarouselShelf')[]} */
        sections: import('../parser/contents/classes/MusicCarouselShelf')[];
        /** @type {string} */
        info: string;
    }>;
    /**
     * Retrieves search suggestions for the given query.
     * @param {string} query
     * @returns {Promise.<import('../parser/contents/classes/SearchSuggestion')[] | import('../parser/contents/classes/HistorySuggestion')[]>}
     */
    getSearchSuggestions(query: string): Promise<import('../parser/contents/classes/SearchSuggestion')[] | import('../parser/contents/classes/HistorySuggestion')[]>;
    #private;
}
import Search = require("../parser/ytmusic/Search");
import HomeFeed = require("../parser/ytmusic/HomeFeed");
import Explore = require("../parser/ytmusic/Explore");
import Library = require("../parser/ytmusic/Library");
import Artist = require("../parser/ytmusic/Artist");
import Album = require("../parser/ytmusic/Album");
