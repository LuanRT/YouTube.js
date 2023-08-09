import Album from '../../parser/ytmusic/Album.js';
import Artist from '../../parser/ytmusic/Artist.js';
import Explore from '../../parser/ytmusic/Explore.js';
import HomeFeed from '../../parser/ytmusic/HomeFeed.js';
import Library from '../../parser/ytmusic/Library.js';
import Playlist from '../../parser/ytmusic/Playlist.js';
import Recap from '../../parser/ytmusic/Recap.js';
import Search from '../../parser/ytmusic/Search.js';
import TrackInfo from '../../parser/ytmusic/TrackInfo.js';

import AutomixPreviewVideo from '../../parser/classes/AutomixPreviewVideo.js';
import Message from '../../parser/classes/Message.js';
import MusicCarouselShelf from '../../parser/classes/MusicCarouselShelf.js';
import MusicDescriptionShelf from '../../parser/classes/MusicDescriptionShelf.js';
import MusicQueue from '../../parser/classes/MusicQueue.js';
import MusicTwoRowItem from '../../parser/classes/MusicTwoRowItem.js';
import PlaylistPanel from '../../parser/classes/PlaylistPanel.js';
import SearchSuggestionsSection from '../../parser/classes/SearchSuggestionsSection.js';
import SectionList from '../../parser/classes/SectionList.js';
import Tab from '../../parser/classes/Tab.js';
import * as Proto from '../../proto/index.js';

import type { ObservedArray, YTNode } from '../../parser/helpers.js';
import type { MusicSearchFilters } from '../../types/index.js';
import { InnertubeError, generateRandomString, throwIfMissing } from '../../utils/Utils.js';
import type Actions from '../Actions.js';
import type Session from '../Session.js';

import {
  BrowseEndpoint,
  NextEndpoint,
  PlayerEndpoint,
  SearchEndpoint
} from '../endpoints/index.js';

import { GetSearchSuggestionsEndpoint } from '../endpoints/music/index.js';

export default class Music {
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
    const player_payload = PlayerEndpoint.build({
      video_id,
      sts: this.#session.player?.sts,
      client: 'YTMUSIC'
    });

    const next_payload = NextEndpoint.build({
      video_id,
      client: 'YTMUSIC'
    });

    const player_response = this.#actions.execute(PlayerEndpoint.PATH, player_payload);
    const next_response = this.#actions.execute(NextEndpoint.PATH, next_payload);
    const response = await Promise.all([ player_response, next_response ]);

    const cpn = generateRandomString(16);

    return new TrackInfo(response, this.#actions, cpn);
  }

  async #fetchInfoFromListItem(list_item: MusicTwoRowItem | undefined): Promise<TrackInfo> {
    if (!list_item)
      throw new InnertubeError('List item cannot be undefined');

    if (!list_item.endpoint)
      throw new Error('This item does not have an endpoint.');

    const player_response = list_item.endpoint.call(this.#actions, {
      client: 'YTMUSIC',
      playbackContext: {
        contentPlaybackContext: {
          ...{
            signatureTimestamp: this.#session.player?.sts
          }
        }
      }
    });

    const next_response = list_item.endpoint.call(this.#actions, {
      client: 'YTMUSIC',
      enablePersistentPlaylistPanel: true,
      override_endpoint: '/next'
    });

    const cpn = generateRandomString(16);

    const response = await Promise.all([ player_response, next_response ]);
    return new TrackInfo(response, this.#actions, cpn);
  }

  /**
   * Searches on YouTube Music.
   * @param query - Search query.
   * @param filters - Search filters.
   */
  async search(query: string, filters: MusicSearchFilters = {}): Promise<Search> {
    throwIfMissing({ query });

    const response = await this.#actions.execute(
      SearchEndpoint.PATH, SearchEndpoint.build({
        query, client: 'YTMUSIC',
        params: filters.type && filters.type !== 'all' ? Proto.encodeMusicSearchFilters(filters) : undefined
      })
    );

    return new Search(response, this.#actions, Reflect.has(filters, 'type') && filters.type !== 'all');
  }

  /**
   * Retrieves the home feed.
   */
  async getHomeFeed(): Promise<HomeFeed> {
    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: 'FEmusic_home',
        client: 'YTMUSIC'
      })
    );

    return new HomeFeed(response, this.#actions);
  }

  /**
   * Retrieves the Explore feed.
   */
  async getExplore(): Promise<Explore> {
    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        client: 'YTMUSIC',
        browse_id: 'FEmusic_explore'
      })
    );

    return new Explore(response);
    // TODO: return new Explore(response, this.#actions);
  }

  /**
   * Retrieves the library.
   */
  async getLibrary(): Promise<Library> {
    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        client: 'YTMUSIC',
        browse_id: 'FEmusic_library_landing'
      })
    );

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

    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        client: 'YTMUSIC',
        browse_id: artist_id
      })
    );

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

    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        client: 'YTMUSIC',
        browse_id: album_id
      })
    );

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

    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        client: 'YTMUSIC',
        browse_id: playlist_id
      })
    );

    return new Playlist(response, this.#actions);
  }

  /**
   * Retrieves up next.
   * @param video_id - The video id.
   * @param automix - Whether to enable automix.
   */
  async getUpNext(video_id: string, automix = true): Promise<PlaylistPanel> {
    throwIfMissing({ video_id });

    const response = await this.#actions.execute(
      NextEndpoint.PATH, { ...NextEndpoint.build({ video_id, client: 'YTMUSIC' }), parse: true }
    );

    const tabs = response.contents_memo?.getType(Tab);

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

    const response = await this.#actions.execute(
      NextEndpoint.PATH, { ...NextEndpoint.build({ video_id, client: 'YTMUSIC' }), parse: true }
    );

    const tabs = response.contents_memo?.getType(Tab);

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

    const response = await this.#actions.execute(
      NextEndpoint.PATH, { ...NextEndpoint.build({ video_id, client: 'YTMUSIC' }), parse: true }
    );

    const tabs = response.contents_memo?.getType(Tab);

    const tab = tabs?.matchCondition((tab) => tab.endpoint.payload.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_TRACK_LYRICS');

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const page = await tab.endpoint.call(this.#actions, { client: 'YTMUSIC', parse: true });

    if (!page.contents)
      throw new InnertubeError('Unexpected response', page);

    if (page.contents.item().type === 'Message')
      throw new InnertubeError(page.contents.item().as(Message).text.toString(), video_id);

    const section_list = page.contents.item().as(SectionList).contents;

    return section_list.firstOfType(MusicDescriptionShelf);
  }

  /**
   * Retrieves recap.
   */
  async getRecap(): Promise<Recap> {
    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        client: 'YTMUSIC_ANDROID',
        browse_id: 'FEmusic_listening_review'
      })
    );

    return new Recap(response, this.#actions);
  }

  /**
   * Retrieves search suggestions for the given query.
   * @param query - The query.
   */
  async getSearchSuggestions(query: string): Promise<ObservedArray<YTNode>> {
    const response = await this.#actions.execute(
      GetSearchSuggestionsEndpoint.PATH,
      { ...GetSearchSuggestionsEndpoint.build({ input: query }), parse: true }
    );

    if (!response.contents_memo)
      throw new InnertubeError('Unexpected response', response);

    const search_suggestions_section = response.contents_memo.getType(SearchSuggestionsSection).first();

    return search_suggestions_section.contents;
  }
}