import Parser from '../parser/index';
import { observe, YTNode } from '../parser/helpers';
import Search from '../parser/ytmusic/Search';
import HomeFeed from '../parser/ytmusic/HomeFeed';
import Explore from '../parser/ytmusic/Explore';
import Library from '../parser/ytmusic/Library';
import Artist from '../parser/ytmusic/Artist';
import Album from '../parser/ytmusic/Album';
import { InnertubeError, throwIfMissing } from '../utils/Utils';
import Session from './Session';
import SingleColumnBrowseResults from '../parser/classes/SingleColumnBrowseResults';
import TabbedSearchResults from '../parser/classes/TabbedSearchResults';
import TwoColumnBrowseResults from '../parser/classes/TwoColumnBrowseResults';
import Tab from '../parser/classes/Tab';
import SearchSuggestionsSection from '../parser/classes/SearchSuggestionsSection';
import NavigationEndpoint from '../parser/classes/NavigationEndpoint';
import MusicDescriptionShelf from '../parser/classes/MusicDescriptionShelf';
import MusicCarouselShelf from '../parser/classes/MusicCarouselShelf';

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
   * @param query
   * @param filters
   * @param filters.type
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
   * @param artist_id
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
   * @param album_id
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
   * @param video_id
   */
  async getLyrics(video_id: string) {
    throwIfMissing({ video_id });
    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
    const data = Parser.parseResponse(response.data);
    const node = data.contents.item();
    if (!node.isOneOf<SingleColumnBrowseResults | TabbedSearchResults | TwoColumnBrowseResults>([ SingleColumnBrowseResults, TabbedSearchResults, TwoColumnBrowseResults ]))
      throw new InnertubeError('Invalid id', video_id);
    const tab = node.tabs.array().get({ title: 'Lyrics' });
    const page = await tab?.key('endpoint').nodeOfType(NavigationEndpoint).call(this.#actions, 'YTMUSIC', true);
    if (!page)
      throw new InnertubeError('Invalid video id');
    if (page.contents.constructor.name === 'Message')
      throw new InnertubeError(page.contents.item().key('text').any(), video_id);
    const description_shelf = page.contents.item().key('contents').parsed().array().get({ type: 'MusicDescriptionShelf' })?.as(MusicDescriptionShelf);
    return {
      text: description_shelf?.description.toString(),
      footer: description_shelf?.footer
    };
  }
  /**
   * Retrieves up next.
   *
   * @param video_id
   */
  async getUpNext(video_id: string) {
    throwIfMissing({ video_id });
    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
    const data = Parser.parseResponse(response.data);
    const node = data.contents.item();
    if (!node.isOneOf<SingleColumnBrowseResults | TabbedSearchResults | TwoColumnBrowseResults>([ SingleColumnBrowseResults, TabbedSearchResults, TwoColumnBrowseResults ]))
      throw new InnertubeError('Invalid id', video_id);
    const tab = node.tabs.array().get({ title: 'Up next' });
    // TODO: verify this is a Tab
    const upnext_content = tab?.as(Tab).content.item().key('content').any();
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
   * @param video_id
   */
  async getRelated(video_id: string) {
    throwIfMissing({ video_id });
    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
    const data = Parser.parseResponse(response.data);
    const node = data.contents.item();
    if (!node.isOneOf<SingleColumnBrowseResults | TabbedSearchResults | TwoColumnBrowseResults>([ SingleColumnBrowseResults, TabbedSearchResults, TwoColumnBrowseResults ]))
      throw new InnertubeError('Invalid id', video_id);
    const tab = node.tabs.array().get({ title: 'Related' });
    const page = await tab?.key('endpoint').nodeOfType(NavigationEndpoint).call(this.#actions, 'YTMUSIC', true);
    if (!page)
      throw new InnertubeError('Invalid video id');
    const shelves = page.contents.item().key('contents').parsed().array().filterType(MusicCarouselShelf);
    const info = page.contents.item().key('contents').parsed().array().get({ type: 'MusicDescriptionShelf' })?.as(MusicDescriptionShelf);
    return {
      sections: shelves,
      info: info?.description.toString() || ''
    };
  }
  /**
   * Retrieves search suggestions for the given query.
   * @param query
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
