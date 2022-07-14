import Parser from "../parser/index.js";
import { observe, YTNode } from "../parser/helpers.js";
import Search from "../parser/ytmusic/Search.js";
import HomeFeed from "../parser/ytmusic/HomeFeed.js";
import Explore from "../parser/ytmusic/Explore.js";
import Library from "../parser/ytmusic/Library.js";
import Artist from "../parser/ytmusic/Artist.js";
import Album from "../parser/ytmusic/Album.js";
import { InnertubeError, throwIfMissing } from "../utils/Utils.js";
import Session from "./Session.js";
import SingleColumnBrowseResults from "../parser/classes/SingleColumnBrowseResults.js";
import TabbedSearchResults from "../parser/classes/TabbedSearchResults.js";
import TwoColumnBrowseResults from "../parser/classes/TwoColumnBrowseResults.js";
import Tab from "../parser/classes/Tab.js";
import SearchSuggestionsSection from "../parser/classes/SearchSuggestionsSection.js";
import NavigationEndpoint from "../parser/classes/NavigationEndpoint.js";
import MusicDescriptionShelf from "../parser/classes/MusicDescriptionShelf.js";
import MusicCarouselShelf from "../parser/classes/MusicCarouselShelf.js";

/** @namespace */
class Music {
    #session;
    #actions;
    constructor(session: Session) {
        this.#session = session;
        this.#actions = session.actions;
    }
    /**
     * Searches on YouTube Music.
     */
    async search(query: string, filters: {
        type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
    } = {}) {
        throwIfMissing({ query });
        const response = await this.#actions.search({ query, filters, client: 'YTMUSIC' });
        return new Search(response, this.#actions, { 
            is_filtered: Reflect.has(filters, 'type') && filters.type !== 'all'
        });
    }
    /**
     * Retrieves the home feed.
     *
     * @returns {Promise.<HomeFeed>}
     */
    async getHomeFeed() {
        const response = await this.#actions.browse('FEmusic_home', { client: 'YTMUSIC' });
        return new HomeFeed(response, this.#actions);
    }
    /**
     * Retrieves the Explore feed.
     *
     * @returns {Promise.<Explore>}
     */
    async getExplore() {
        const response = await this.#actions.browse('FEmusic_explore', { client: 'YTMUSIC' });
        return new Explore(response);
        // TODO: return new Explore(response, this.#actions);
    }
    /**
     * Retrieves the Library.
     *
     * @returns {Promise.<Library>}
     */
    async getLibrary() {
        const response = await this.#actions.browse('FEmusic_liked_albums', { client: 'YTMUSIC' });
        return new Library(response);
        // TODO: return new Library(response, this.#actions);
    }
    /**
     * Retrieves artist's info & content.
     *
     * @param {string} artist_id
     * @returns {Promise.<Artist>}
     */
    async getArtist(artist_id: string) {
        throwIfMissing({ artist_id });
        if (!artist_id.startsWith('UC'))
            throw new InnertubeError('Invalid artist id', artist_id);
        const response = await this.#actions.browse(artist_id, { client: 'YTMUSIC' });
        return new Artist(response, this.#actions);
    }
    /**
     * Retrieves album.
     *
     * @param {string} album_id
     * @returns {Promise.<Album>}
     */
    async getAlbum(album_id: string) {
        throwIfMissing({ album_id });
        if (!album_id.startsWith('MPR'))
            throw new InnertubeError('Invalid album id', album_id);
        const response = await this.#actions.browse(album_id, { client: 'YTMUSIC' });
        return new Album(response, this.#actions);
    }
    /**
     * Retrieves song lyrics.
     *
     * @param {string} video_id
     */
    async getLyrics(video_id: string) {
        throwIfMissing({ video_id });
        const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
        const data = Parser.parseResponse(response.data);
        const node = data.contents.item();
        if (!node.isOneOf<SingleColumnBrowseResults | TabbedSearchResults | TwoColumnBrowseResults>([SingleColumnBrowseResults, TabbedSearchResults, TwoColumnBrowseResults]))
            throw new InnertubeError('Invalid id', video_id);
        const tab = node.tabs.array().get({ title: 'Lyrics' });
        const page = await tab?.key("endpoint").nodeOfType(NavigationEndpoint).call(this.#actions, 'YTMUSIC', true);
        if (!page)
            throw new InnertubeError('Invalid video id');
        if (page.contents.constructor.name === 'Message')
            throw new InnertubeError(page.contents.item().key("text").any(), video_id);
        const description_shelf = page.contents.item().key("contents").parsed().array().get({ type: 'MusicDescriptionShelf' })?.as(MusicDescriptionShelf);
        return {
            text: description_shelf?.description.toString(),
            footer: description_shelf?.footer
        };
    }
    /**
     * Retrieves up next.
     *
     * @param {string} video_id
     */
    async getUpNext(video_id: string) {
        throwIfMissing({ video_id });
        const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
        const data = Parser.parseResponse(response.data);
        const node = data.contents.item();
        if (!node.isOneOf<SingleColumnBrowseResults | TabbedSearchResults | TwoColumnBrowseResults>([SingleColumnBrowseResults, TabbedSearchResults, TwoColumnBrowseResults]))
            throw new InnertubeError('Invalid id', video_id);
        const tab = node.tabs.array().get({ title: 'Up next' });
        // TODO: verify this is a Tab
        const upnext_content = tab?.as(Tab).content.item().key("content").any();
        if (!upnext_content)
            throw new InnertubeError('Invalid id', video_id);
        return {
            /** @type {string} */
            id: upnext_content.playlist_id,
            /** @type {string} */
            title: upnext_content.title,
            /** @type {boolean} */
            is_editable: upnext_content.is_editable,
            /** @type {import('../parser/contents/classes/PlaylistPanelVideo')[]} */
            contents: observe(upnext_content.contents)
        };
    }
    /**
     * Retrieves related content.
     *
     * @param {string} video_id
     */
    async getRelated(video_id: string) {
        throwIfMissing({ video_id });
        const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
        const data = Parser.parseResponse(response.data);
        const node = data.contents.item();
        if (!node.isOneOf<SingleColumnBrowseResults | TabbedSearchResults | TwoColumnBrowseResults>([SingleColumnBrowseResults, TabbedSearchResults, TwoColumnBrowseResults]))
            throw new InnertubeError('Invalid id', video_id);
        const tab = node.tabs.array().get({ title: 'Related' });
        const page = await tab?.key("endpoint").nodeOfType(NavigationEndpoint).call(this.#actions, 'YTMUSIC', true);
        if (!page)
            throw new InnertubeError('Invalid video id');
        const shelves = page.contents.item().key("contents").parsed().array().filterType(MusicCarouselShelf);
        const info = page.contents.item().key("contents").parsed().array().get({ type: 'MusicDescriptionShelf' })?.as(MusicDescriptionShelf);
        return {
            sections: shelves,
            info: info?.description.toString() || ''
        };
    }
    /**
     * Retrieves search suggestions for the given query.
     * @param {string} query
     * @returns {Promise.<import('../parser/contents/classes/SearchSuggestion')[] | import('../parser/contents/classes/HistorySuggestion')[]>}
     */
    async getSearchSuggestions(query: string) {
        const response = await this.#actions.execute('/music/get_search_suggestions', {
            parse: true,
            input: query,
            client: 'YTMUSIC'
        });
        const search_suggestions_section = response.contents_memo.getType(SearchSuggestionsSection)?.[0];
        if (!search_suggestions_section.contents.is_array)
            return observe([] as YTNode[]);
        return search_suggestions_section?.contents.array();
    }
}
export default Music;
