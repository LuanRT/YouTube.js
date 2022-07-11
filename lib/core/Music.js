'use strict';

const Parser = require('../parser');
const Search = require('../parser/ytmusic/Search');
const HomeFeed = require('../parser/ytmusic/HomeFeed');
const Explore = require('../parser/ytmusic/Explore');
const Library = require('../parser/ytmusic/Library');
const Artist = require('../parser/ytmusic/Artist');
const Album = require('../parser/ytmusic/Album');

const { InnertubeError, throwIfMissing, observe } = require('../utils/Utils');

/** @namespace */
class Music {
  #session;
  #actions;

  /**
   * @param {import('../Innertube')} session
   */
  constructor(session) {
    this.#session = session;
    this.#actions = session.actions;
  }

  /**
   * Searches on YouTube Music.
   *
   * @param {string} query
   * @param {object} filters - search filters
   * @param {string} [filters.type] - all | song | video | album | playlist | artist
   * @returns {Promise.<Search>}
   */
  async search(query, filters) {
    throwIfMissing({ query });
    const response = await this.#actions.search({ query, filters, client: 'YTMUSIC' });
    return new Search(response, this.#actions, { is_filtered: filters?.hasOwnProperty('type') && filters.type !== 'all' });
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
    return new Explore(response, this.#actions);
  }

  /**
   * Retrieves the Library.
   *
   * @returns {Promise.<Library>}
   */
  async getLibrary() {
    const response = await this.#actions.browse('FEmusic_liked_albums', { client: 'YTMUSIC' });
    return new Library(response, this.#actions);
  }

  /**
   * Retrieves artist's info & content.
   *
   * @param {string} artist_id
   * @returns {Promise.<Artist>}
   */
  async getArtist(artist_id) {
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
  async getAlbum(album_id) {
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
  async getLyrics(video_id) {
    throwIfMissing({ video_id });

    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });

    const data = Parser.parseResponse(response.data);
    const tab = data.contents.tabs.get({ title: 'Lyrics' });

    const page = await tab.endpoint.call(this.#actions, 'YTMUSIC');
    if (!page) throw new InnertubeError('Invalid video id');

    if (page.contents.constructor.name === 'Message')
      throw new InnertubeError(page.contents.text, video_id);

    const description_shelf = page.contents.contents.get({ type: 'MusicDescriptionShelf' });

    return {
      /** @type {string} */
      text: description_shelf.description.toString(),
      /** @type {import('../parser/contents/classes/Text')} */
      footer: description_shelf.footer
    };
  }

  /**
   * Retrieves up next.
   *
   * @param {string} video_id
   */
  async getUpNext(video_id) {
    throwIfMissing({ video_id });

    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });

    const data = Parser.parseResponse(response.data);
    const tab = data.contents.tabs.get({ title: 'Up next' });

    const upnext_content = tab.content.content;
    if (!upnext_content) throw new InnertubeError('Invalid id', video_id);

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
  async getRelated(video_id) {
    throwIfMissing({ video_id });

    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });

    const data = Parser.parseResponse(response.data);
    const tab = data.contents.tabs.get({ title: 'Related' });

    const page = await tab.endpoint.call(this.#actions, 'YTMUSIC');
    if (!page) throw new InnertubeError('Invalid video id');

    const shelves = page.contents.contents.findAll({ type: 'MusicCarouselShelf' });
    const info = page.contents.contents.get({ type: 'MusicDescriptionShelf' });

    return {
      /** @type {import('../parser/contents/classes/MusicCarouselShelf')[]} */
      sections: shelves,
      /** @type {string} */
      info: info?.description.toString() || ''
    };
  }

  /**
   * Retrieves search suggestions for the given query.
   * @param {string} query
   * @returns {Promise.<import('../parser/contents/classes/SearchSuggestion')[] | import('../parser/contents/classes/HistorySuggestion')[]>}
   */
  async getSearchSuggestions(query) {
    const payload = {
      parse: true,
      input: query,
      client: 'YTMUSIC'
    };

    const response = await this.#actions.execute('/music/get_search_suggestions', payload);
    const search_suggestions_section = response.contents_memo.get('SearchSuggestionsSection')?.[0];

    return search_suggestions_section?.contents || [];
  }
}

module.exports = Music;