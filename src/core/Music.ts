import Session from './Session';

import TrackInfo from '../parser/ytmusic/TrackInfo';

import Search from '../parser/ytmusic/Search';
import HomeFeed from '../parser/ytmusic/HomeFeed';
import Explore from '../parser/ytmusic/Explore';
import Library from '../parser/ytmusic/Library';
import Artist from '../parser/ytmusic/Artist';
import Album from '../parser/ytmusic/Album';
import Playlist from '../parser/ytmusic/Playlist';

import Parser from '../parser/index';
import { observe, YTNode } from '../parser/helpers';

import MusicQueue from '../parser/classes/MusicQueue';
import PlaylistPanel from '../parser/classes/PlaylistPanel';
import Message from '../parser/classes/Message';
import MusicDescriptionShelf from '../parser/classes/MusicDescriptionShelf';
import MusicCarouselShelf from '../parser/classes/MusicCarouselShelf';
import SearchSuggestionsSection from '../parser/classes/SearchSuggestionsSection';

import Tab from '../parser/classes/Tab';
import Tabbed from '../parser/classes/Tabbed';
import SingleColumnMusicWatchNextResults from '../parser/classes/SingleColumnMusicWatchNextResults';
import WatchNextTabbedResults from '../parser/classes/WatchNextTabbedResults';
import SectionList from '../parser/classes/SectionList';

import { InnertubeError, throwIfMissing } from '../utils/Utils';

class Music {
  #actions;

  constructor(session: Session) {
    this.#actions = session.actions;
  }

  /**
   * Retrieves track info.
   */
  async getInfo(video_id: string) {
    const initial_info = this.#actions.execute('/player', { client: 'YTMUSIC', videoId: video_id });
    const continuation = this.#actions.execute('/next', { client: 'YTMUSIC', videoId: video_id });

    const response = await Promise.all([ initial_info, continuation ]);
    return new TrackInfo(response, this.#actions);
  }

  /**
   * Searches on YouTube Music.
   */
  async search(query: string, filters: {
    type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
  } = {}) {
    throwIfMissing({ query });
    const response = await this.#actions.search({ query, filters, client: 'YTMUSIC' });
    return new Search(response, this.#actions, { is_filtered: Reflect.has(filters, 'type') && filters.type !== 'all' });
  }

  /**
   * Retrieves the home feed.
   */
  async getHomeFeed() {
    const response = await this.#actions.browse('FEmusic_home', { client: 'YTMUSIC' });
    return new HomeFeed(response, this.#actions);
  }

  /**
   * Retrieves the Explore feed.
   */
  async getExplore() {
    const response = await this.#actions.browse('FEmusic_explore', { client: 'YTMUSIC' });
    return new Explore(response);
    // TODO: return new Explore(response, this.#actions);
  }

  /**
   * Retrieves the Library.
   */
  getLibrary() {
    return new Library(this.#actions);
  }

  /**
   * Retrieves artist's info & content.
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
   */
  async getAlbum(album_id: string) {
    throwIfMissing({ album_id });

    if (!album_id.startsWith('MPR'))
      throw new InnertubeError('Invalid album id', album_id);

    const response = await this.#actions.browse(album_id, { client: 'YTMUSIC' });
    return new Album(response, this.#actions);
  }

  /**
   * Retrieves playlist.
   */
  async getPlaylist(playlist_id: string) {
    throwIfMissing({ playlist_id });

    if (!playlist_id.startsWith('VL')) {
      playlist_id = `VL${playlist_id}`;
    }
    const response = await this.#actions.browse(playlist_id, { client: 'YTMUSIC' });
    return new Playlist(response, this.#actions);
  }

  /**
   * Retrieves song lyrics.
   */
  async getLyrics(video_id: string) {
    throwIfMissing({ video_id });

    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });

    const data = Parser.parseResponse(response.data);

    const tabs = data.contents.item()
      .as(SingleColumnMusicWatchNextResults).contents.item()
      .as(Tabbed).contents.item()
      .as(WatchNextTabbedResults)
      .tabs.array().as(Tab);

    const tab = tabs.get({ title: 'Lyrics' });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const page = await tab.endpoint.call(this.#actions, 'YTMUSIC', true);

    if (!page)
      throw new InnertubeError('Could not retrieve tab contents, the given id may be invalid or is not a song.');

    if (page.contents.item().key('type').string() === 'Message')
      throw new InnertubeError(page.contents.item().as(Message).text, video_id);

    const section_list = page.contents.item().as(SectionList).contents.array();
    const description_shelf = section_list.firstOfType(MusicDescriptionShelf);

    return {
      text: description_shelf?.description.toString(),
      footer: description_shelf?.footer
    };
  }

  /**
   * Retrieves up next.
   */
  async getUpNext(video_id: string) {
    throwIfMissing({ video_id });

    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });

    const data = Parser.parseResponse(response.data);

    const tabs = data.contents.item()
      .as(SingleColumnMusicWatchNextResults).contents.item()
      .as(Tabbed).contents.item()
      .as(WatchNextTabbedResults)
      .tabs.array().as(Tab);

    const tab = tabs.get({ title: 'Up next' });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const music_queue = tab.content?.as(MusicQueue);

    if (!music_queue || !music_queue.content)
      throw new InnertubeError('Music queue was empty, the given id is probably invalid.', music_queue);

    const playlist_panel = music_queue.content.item().as(PlaylistPanel);

    return playlist_panel;
  }

  /**
   * Retrieves related content.
   */
  async getRelated(video_id: string) {
    throwIfMissing({ video_id });

    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });

    const data = Parser.parseResponse(response.data);

    const tabs = data.contents.item()
      .as(SingleColumnMusicWatchNextResults).contents.item()
      .as(Tabbed).contents.item()
      .as(WatchNextTabbedResults)
      .tabs.array().as(Tab);

    const tab = tabs.get({ title: 'Related' });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const page = await tab.endpoint.call(this.#actions, 'YTMUSIC', true);

    if (!page)
      throw new InnertubeError('Could not retrieve tab contents, the given id may be invalid or is not a song.');

    const shelves = page.contents.item().as(SectionList).contents.array().as(MusicCarouselShelf, MusicDescriptionShelf);

    return shelves;
  }

  /**
   * Retrieves search suggestions for the given query.
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