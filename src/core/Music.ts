import Session from './Session';

import TrackInfo from '../parser/ytmusic/TrackInfo';

import Search from '../parser/ytmusic/Search';
import HomeFeed from '../parser/ytmusic/HomeFeed';
import Explore from '../parser/ytmusic/Explore';
import Library from '../parser/ytmusic/Library';
import Artist from '../parser/ytmusic/Artist';
import Album from '../parser/ytmusic/Album';
import Playlist from '../parser/ytmusic/Playlist';
import Recap from '../parser/ytmusic/Recap';

import Message from '../parser/classes/Message';
import MenuNavigationItem from '../parser/classes/menus/MenuNavigationItem';
import MusicDescriptionShelf from '../parser/classes/MusicDescriptionShelf';
import MusicResponsiveListItem from '../parser/classes/MusicResponsiveListItem';
import SearchSuggestionsSection from '../parser/classes/SearchSuggestionsSection';

import { observe, ObservedArray, YTNode } from '../parser/helpers';
import { InnertubeError, throwIfMissing, generateRandomString } from '../utils/Utils';

class Music {
  #session;
  #actions;

  constructor(session: Session) {
    this.#session = session;
    this.#actions = session.actions;
  }
  
  /**
   * Retrives track info.
   * Note: passing a list item adds more context to the request, thus more info (up next contents, etc) is returned.
   * @param target - video id or a list item.
   */
  getInfo(target: string | MusicResponsiveListItem) {
    if (target instanceof MusicResponsiveListItem) {
      return this.#fetchInfoFromListItem(target);
    } else if (typeof target === 'string') {
      return this.#fetchInfoFromVideoId(target);
    }
    
    throw new InnertubeError('Invalid target, expected either a video id or a list item', target);
  }

  async #fetchInfoFromVideoId(video_id: string) {
    const cpn = generateRandomString(16);
  
    const initial_info = this.#actions.execute('/player', {
      cpn,
      client: 'YTMUSIC',
      videoId: video_id,
      playbackContext: {
        contentPlaybackContext: {
          signatureTimestamp: this.#session.player.sts
        }
      }
    });
    
    const continuation = this.#actions.execute('/next', {
      client: 'YTMUSIC', 
      videoId: video_id
    });

    const response = await Promise.all([ initial_info, continuation ]);
    return new TrackInfo(response, this.#actions, cpn);
  }
  
  async #fetchInfoFromListItem(list_item: MusicResponsiveListItem | undefined) {
    if (!list_item)
      throw new InnertubeError('List item cannot be undefined');
      
    if (!list_item.menu)
      throw new Error('This item does not have a menu.');
    
    const start_radio_button = list_item.menu.items.get({ icon_type: 'MIX' })?.as(MenuNavigationItem);
    
    if (!start_radio_button)
      throw new Error('Could not find target button.');
    
    const cpn = generateRandomString(16);
    
    const initial_info = start_radio_button.endpoint.callTest(this.#actions, {
      cpn,
      client: 'YTMUSIC',
      playbackContext: {
        contentPlaybackContext: {
          signatureTimestamp: this.#session.player.sts
        }
      }
    });
    
    const continuation = start_radio_button.endpoint.callTest(this.#actions, {
      client: 'YTMUSIC',
      enablePersistentPlaylistPanel: true,
      override_endpoint: '/next'
    });
    
    const response = await Promise.all([ initial_info, continuation ]);
    return new TrackInfo(response, this.#actions, cpn);
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

    if (!artist_id.startsWith('UC') && !artist_id.startsWith('FEmusic_library_privately_owned_artist'))
      throw new InnertubeError('Invalid artist id', artist_id);

    const response = await this.#actions.browse(artist_id, { client: 'YTMUSIC' });
    return new Artist(response, this.#actions);
  }

  /**
   * Retrieves album.
   */
  async getAlbum(album_id: string) {
    throwIfMissing({ album_id });

    if (!album_id.startsWith('MPR') && !album_id.startsWith('FEmusic_library_privately_owned_release'))
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
   * Retrieves up next (this only works properly if a list item is passed instead of a video id).
   * @param target - video id or a list item.
   */
  async getUpNext(target: string | MusicResponsiveListItem) {
    const info = await this.getInfo(target);
    return info.getTab('Up next');
  }

  /**
   * Retrieves related content.
   * @param target - video id or a list item.
   */
  async getRelated(target: string | MusicResponsiveListItem) {
    const info = await this.getInfo(target);
    return info.getTab('Related');
  }
  
  /**
   * Retrieves song lyrics.
   * @param target - video id or a list item.
   */
  async getLyrics(target: string | MusicResponsiveListItem) {
    const info = await this.getInfo(target);
    const tab = await info.getTab('Lyrics');
    
    if (tab instanceof Message)
      throw new InnertubeError(tab.text);
    
    const description_shelf = (tab as ObservedArray<YTNode>).firstOfType(MusicDescriptionShelf);

    return {
      text: description_shelf?.description.toString(),
      footer: description_shelf?.footer
    };
  }

  async getRecap() {
    const response = await this.#actions.execute('/browse', {
      browseId: 'FEmusic_listening_review',
      client: 'YTMUSIC_ANDROID'
    });

    return new Recap(response, this.#actions);
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