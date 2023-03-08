
import Album from '../parser/ytmusic/Album.ts';
import Artist from '../parser/ytmusic/Artist.ts';
import Explore from '../parser/ytmusic/Explore.ts';
import HomeFeed from '../parser/ytmusic/HomeFeed.ts';
import Library from '../parser/ytmusic/Library.ts';
import Playlist from '../parser/ytmusic/Playlist.ts';
import Recap from '../parser/ytmusic/Recap.ts';
import Search from '../parser/ytmusic/Search.ts';
import TrackInfo from '../parser/ytmusic/TrackInfo.ts';

import AutomixPreviewVideo from '../parser/classes/AutomixPreviewVideo.ts';
import Message from '../parser/classes/Message.ts';
import MusicCarouselShelf from '../parser/classes/MusicCarouselShelf.ts';
import MusicDescriptionShelf from '../parser/classes/MusicDescriptionShelf.ts';
import MusicQueue from '../parser/classes/MusicQueue.ts';
import MusicTwoRowItem from '../parser/classes/MusicTwoRowItem.ts';
import PlaylistPanel from '../parser/classes/PlaylistPanel.ts';
import SearchSuggestionsSection from '../parser/classes/SearchSuggestionsSection.ts';
import SectionList from '../parser/classes/SectionList.ts';
import Tab from '../parser/classes/Tab.ts';

import { observe } from '../parser/helpers.ts';
import Proto from '../proto/index.ts';
import { generateRandomString, InnertubeError, throwIfMissing } from '../utils/Utils.ts';

import type { ObservedArray, YTNode } from '../parser/helpers.ts';
import type Actions from './Actions.ts';
import type Session from './Session.ts';

export type SearchFilters = {
  type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
};

class Music {
  #session: Session;
  #actions: Actions;

  constructor(session: Session) {
    this.#session = session;
    this.#actions = session.actions;
  }

  /**
   * Retrieves track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.
   * @param target - Video id or a list item.
   */
  getInfo(target: string | MusicTwoRowItem): Promise<TrackInfo> {
    if (target instanceof MusicTwoRowItem) {
      return this.#fetchInfoFromListItem(target);
    } else if (typeof target === 'string') {
      return this.#fetchInfoFromVideoId(target);
    }

    throw new InnertubeError('Invalid target, expected either a video id or a valid MusicTwoRowItem', target);
  }

  async #fetchInfoFromVideoId(video_id: string): Promise<TrackInfo> {
    const cpn = generateRandomString(16);

    const initial_info = this.#actions.execute('/player', {
      cpn,
      client: 'YTMUSIC',
      videoId: video_id,
      playbackContext: {
        contentPlaybackContext: {
          signatureTimestamp: this.#session.player?.sts || 0
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

  async #fetchInfoFromListItem(list_item: MusicTwoRowItem | undefined): Promise<TrackInfo> {
    if (!list_item)
      throw new InnertubeError('List item cannot be undefined');

    if (!list_item.endpoint)
      throw new Error('This item does not have an endpoint.');

    const cpn = generateRandomString(16);

    const initial_info = list_item.endpoint.call(this.#actions, {
      cpn,
      client: 'YTMUSIC',
      playbackContext: {
        contentPlaybackContext: {
          signatureTimestamp: this.#session.player?.sts || 0
        }
      }
    });

    const continuation = list_item.endpoint.call(this.#actions, {
      client: 'YTMUSIC',
      enablePersistentPlaylistPanel: true,
      override_endpoint: '/next'
    });

    const response = await Promise.all([ initial_info, continuation ]);
    return new TrackInfo(response, this.#actions, cpn);
  }

  /**
   * Searches on YouTube Music.
   * @param query - Search query.
   * @param filters - Search filters.
   */
  async search(query: string, filters: SearchFilters = {}): Promise<Search> {
    throwIfMissing({ query });

    const payload: {
      query: string;
      client: string;
      params?: string;
    } = { query, client: 'YTMUSIC' };

    if (filters.type && filters.type !== 'all') {
      payload.params = Proto.encodeMusicSearchFilters(filters);
    }

    const response = await this.#actions.execute('/search', payload);

    return new Search(response, this.#actions, Reflect.has(filters, 'type') && filters.type !== 'all');
  }

  /**
   * Retrieves the home feed.
   */
  async getHomeFeed(): Promise<HomeFeed> {
    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      browseId: 'FEmusic_home'
    });

    return new HomeFeed(response, this.#actions);
  }

  /**
   * Retrieves the Explore feed.
   */
  async getExplore(): Promise<Explore> {
    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      browseId: 'FEmusic_explore'
    });

    return new Explore(response);
    // TODO: return new Explore(response, this.#actions);
  }

  /**
   * Retrieves the library.
   */
  async getLibrary(): Promise<Library> {
    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      browseId: 'FEmusic_library_landing'
    });

    return new Library(response, this.#actions);
  }

  /**
   * Retrieves artist's info & content.
   * @param artist_id - The artist id.
   */
  async getArtist(artist_id: string): Promise<Artist> {
    throwIfMissing({ artist_id });

    if (!artist_id.startsWith('UC') && !artist_id.startsWith('FEmusic_library_privately_owned_artist'))
      throw new InnertubeError('Invalid artist id', artist_id);

    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      browseId: artist_id
    });

    return new Artist(response, this.#actions);
  }

  /**
   * Retrieves album.
   * @param album_id - The album id.
   */
  async getAlbum(album_id: string): Promise<Album> {
    throwIfMissing({ album_id });

    if (!album_id.startsWith('MPR') && !album_id.startsWith('FEmusic_library_privately_owned_release'))
      throw new InnertubeError('Invalid album id', album_id);

    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      browseId: album_id
    });

    return new Album(response);
  }

  /**
   * Retrieves playlist.
   * @param playlist_id - The playlist id.
   */
  async getPlaylist(playlist_id: string): Promise<Playlist> {
    throwIfMissing({ playlist_id });

    if (!playlist_id.startsWith('VL')) {
      playlist_id = `VL${playlist_id}`;
    }

    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      browseId: playlist_id
    });

    return new Playlist(response, this.#actions);
  }

  /**
   * Retrieves up next.
   * @param video_id - The video id.
   * @param automix - Whether to enable automix.
   */
  async getUpNext(video_id: string, automix = true): Promise<PlaylistPanel> {
    throwIfMissing({ video_id });

    const data = await this.#actions.execute('/next', {
      videoId: video_id,
      client: 'YTMUSIC',
      parse: true
    });

    const tabs = data.contents_memo?.getType(Tab);

    const tab = tabs?.first();

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const music_queue = tab.content?.as(MusicQueue);

    if (!music_queue || !music_queue.content)
      throw new InnertubeError('Music queue was empty, the given id is probably invalid.', music_queue);

    const playlist_panel = music_queue.content.as(PlaylistPanel);

    if (!playlist_panel.playlist_id && automix) {
      const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo);

      if (!automix_preview_video)
        throw new InnertubeError('Automix item not found');

      const page = await automix_preview_video.playlist_video?.endpoint.call(this.#actions, {
        videoId: video_id,
        client: 'YTMUSIC',
        parse: true
      });

      if (!page || !page.contents_memo)
        throw new InnertubeError('Could not fetch automix');

      return page.contents_memo.getType(PlaylistPanel).first();
    }

    return playlist_panel;
  }

  /**
   * Retrieves related content.
   * @param video_id - The video id.
   */
  async getRelated(video_id: string): Promise<ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>> {
    throwIfMissing({ video_id });

    const data = await this.#actions.execute('/next', {
      videoId: video_id,
      client: 'YTMUSIC',
      parse: true
    });

    const tabs = data.contents_memo?.getType(Tab);

    const tab = tabs?.matchCondition((tab) => tab.endpoint.payload.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_TRACK_RELATED');

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const page = await tab.endpoint.call(this.#actions, { client: 'YTMUSIC', parse: true });

    if (!page.contents)
      throw new InnertubeError('Unexpected response', page);

    const shelves = page.contents.item().as(SectionList).contents.as(MusicCarouselShelf, MusicDescriptionShelf);

    return shelves;
  }

  /**
   * Retrieves song lyrics.
   * @param video_id - The video id.
   */
  async getLyrics(video_id: string): Promise<MusicDescriptionShelf | undefined> {
    throwIfMissing({ video_id });

    const data = await this.#actions.execute('/next', {
      videoId: video_id,
      client: 'YTMUSIC',
      parse: true
    });

    const tabs = data.contents_memo?.getType(Tab);

    const tab = tabs?.matchCondition((tab) => tab.endpoint.payload.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_TRACK_LYRICS');

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const page = await tab.endpoint.call(this.#actions, { client: 'YTMUSIC', parse: true });

    if (!page.contents)
      throw new InnertubeError('Unexpected response', page);

    if (page.contents.item().key('type').string() === 'Message')
      throw new InnertubeError(page.contents.item().as(Message).text, video_id);

    const section_list = page.contents.item().as(SectionList).contents;

    return section_list.firstOfType(MusicDescriptionShelf);
  }

  /**
   * Retrieves recap.
   */
  async getRecap(): Promise<Recap> {
    const response = await this.#actions.execute('/browse', {
      browseId: 'FEmusic_listening_review',
      client: 'YTMUSIC_ANDROID'
    });

    return new Recap(response, this.#actions);
  }

  /**
   * Retrieves search suggestions for the given query.
   * @param query - The query.
   */
  async getSearchSuggestions(query: string): Promise<ObservedArray<YTNode>> {
    const response = await this.#actions.execute('/music/get_search_suggestions', {
      parse: true,
      input: query,
      client: 'YTMUSIC'
    });

    const search_suggestions_section = response.contents_memo?.getType(SearchSuggestionsSection)?.[0];

    if (!search_suggestions_section?.contents.is_array)
      return observe([] as YTNode[]);

    return search_suggestions_section?.contents.array();
  }
}

export default Music;