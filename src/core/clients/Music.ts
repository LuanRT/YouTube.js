import { generateRandomString, InnertubeError, throwIfMissing, u8ToBase64 } from '../../utils/Utils.js';

import {
  Album,
  Artist,
  Explore,
  HomeFeed,
  Library,
  Playlist,
  Recap,
  Search,
  TrackInfo
} from '../../parser/ytmusic/index.js';

import AutomixPreviewVideo from '../../parser/classes/AutomixPreviewVideo.js';
import Message from '../../parser/classes/Message.js';
import MusicDescriptionShelf from '../../parser/classes/MusicDescriptionShelf.js';
import MusicQueue from '../../parser/classes/MusicQueue.js';
import MusicTwoRowItem from '../../parser/classes/MusicTwoRowItem.js';
import MusicResponsiveListItem from '../../parser/classes/MusicResponsiveListItem.js';
import NavigationEndpoint from '../../parser/classes/NavigationEndpoint.js';
import PlaylistPanel from '../../parser/classes/PlaylistPanel.js';
import SearchSuggestionsSection from '../../parser/classes/SearchSuggestionsSection.js';
import SectionList from '../../parser/classes/SectionList.js';
import Tab from '../../parser/classes/Tab.js';

import { SearchFilter } from '../../../protos/generated/misc/params.js';

import type { ObservedArray } from '../../parser/helpers.js';
import type { MusicSearchFilters } from '../../types/index.js';
import type { Actions, Session } from '../index.js';

export default class Music {
  #session: Session;
  readonly #actions: Actions;

  constructor(session: Session) {
    this.#session = session;
    this.#actions = session.actions;
  }

  /**
   * Retrieves track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.
   * @param target - Video id or a list item.
   */
  getInfo(target: string | MusicTwoRowItem | MusicResponsiveListItem | NavigationEndpoint): Promise<TrackInfo> {
    if (target instanceof MusicTwoRowItem) {
      return this.#fetchInfoFromEndpoint(target.endpoint);
    } else if (target instanceof MusicResponsiveListItem) {
      return this.#fetchInfoFromEndpoint(target.overlay?.content?.endpoint ?? target.endpoint);
    } else if (target instanceof NavigationEndpoint) {
      return this.#fetchInfoFromEndpoint(target);
    }
    return this.#fetchInfoFromVideoId(target);
  }

  async #fetchInfoFromVideoId(video_id: string): Promise<TrackInfo> {
    const payload = { videoId: video_id, racyCheckOk: true, contentCheckOk: true };
    const watch_endpoint = new NavigationEndpoint({ watchEndpoint: payload });
    const watch_next_endpoint = new NavigationEndpoint({ watchNextEndpoint: payload });

    const extra_payload: Record<string, any> = {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          lactMilliseconds: '-1',
          signatureTimestamp: this.#session.player?.sts
        }
      },
      client: 'YTMUSIC'
    };

    if (this.#session.po_token) {
      extra_payload.serviceIntegrityDimensions = {
        poToken: this.#session.po_token
      };
    }

    const watch_response = watch_endpoint.call(this.#actions, extra_payload);

    const watch_next_response = watch_next_endpoint.call(this.#actions, { client: 'YTMUSIC' });

    const response = await Promise.all([ watch_response, watch_next_response ]);
    const cpn = generateRandomString(16);

    return new TrackInfo(response, this.#actions, cpn);
  }

  async #fetchInfoFromEndpoint(endpoint?: NavigationEndpoint): Promise<TrackInfo> {
    if (!endpoint)
      throw new Error('This item does not have an endpoint.');

    const extra_payload: Record<string, any> = {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          lactMilliseconds: '-1',
          signatureTimestamp: this.#session.player?.sts
        }
      },
      client: 'YTMUSIC'
    };

    if (this.#session.po_token) {
      extra_payload.serviceIntegrityDimensions = {
        poToken: this.#session.po_token
      };
    }
    
    const player_response = endpoint.call(this.#actions, extra_payload);

    const next_response = endpoint.call(this.#actions, {
      client: 'YTMUSIC',
      enablePersistentPlaylistPanel: true,
      override_endpoint: '/next'
    });

    const cpn = generateRandomString(16);

    const response = await Promise.all([ player_response, next_response ]);
    return new TrackInfo(response, this.#actions, cpn);
  }

  async search(query: string, filters: MusicSearchFilters = {}): Promise<Search> {
    throwIfMissing({ query });

    let params: string | undefined;

    if (filters.type && filters.type !== 'all') {
      const writer = SearchFilter.encode({
        filters: {
          musicSearchType: {
            [filters.type]: true
          }
        }
      });
      params = encodeURIComponent(u8ToBase64(writer.finish()));
    }

    const search_endpoint = new NavigationEndpoint({ searchEndpoint: { query, params } });
    const response = await search_endpoint.call(this.#actions, { client: 'YTMUSIC' });

    return new Search(response, this.#actions, Reflect.has(filters, 'type') && filters.type !== 'all');
  }

  async getHomeFeed(): Promise<HomeFeed> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEmusic_home' } });
    const response = await browse_endpoint.call(this.#actions, { client: 'YTMUSIC' });
    return new HomeFeed(response, this.#actions);
  }

  async getExplore(): Promise<Explore> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEmusic_explore' } });
    const response = await browse_endpoint.call(this.#actions, { client: 'YTMUSIC' });
    return new Explore(response);
    // TODO: return new Explore(response, this.#actions);
  }

  async getLibrary(): Promise<Library> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEmusic_library_landing' } });
    const response = await browse_endpoint.call(this.#actions, { client: 'YTMUSIC' });
    return new Library(response, this.#actions);
  }

  async getArtist(artist_id: string): Promise<Artist> {
    if (!artist_id || !artist_id.startsWith('UC') && !artist_id.startsWith('FEmusic_library_privately_owned_artist'))
      throw new InnertubeError('Invalid artist id', artist_id);

    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: artist_id } });
    const response = await browse_endpoint.call(this.#actions, { client: 'YTMUSIC' });

    return new Artist(response, this.#actions);
  }

  async getAlbum(album_id: string): Promise<Album> {
    if (!album_id || !album_id.startsWith('MPR') && !album_id.startsWith('FEmusic_library_privately_owned_release'))
      throw new InnertubeError('Invalid album id', album_id);

    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: album_id } });
    const response = await browse_endpoint.call(this.#actions, { client: 'YTMUSIC' });

    return new Album(response);
  }

  async getPlaylist(playlist_id: string): Promise<Playlist> {
    if (!playlist_id.startsWith('VL'))
      playlist_id = `VL${playlist_id}`;

    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: playlist_id } });
    const response = await browse_endpoint.call(this.#actions, { client: 'YTMUSIC' });

    return new Playlist(response, this.#actions);
  }

  async getUpNext(video_id: string, automix = true): Promise<PlaylistPanel> {
    throwIfMissing({ video_id });

    const watch_next_endpoint = new NavigationEndpoint({ watchNextEndpoint: { videoId: video_id } });
    const response = await watch_next_endpoint.call(this.#actions, { client: 'YTMUSIC', parse: true });

    const tabs = response.contents_memo?.getType(Tab);
    const tab = tabs?.[0];

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

      return page.contents_memo.getType(PlaylistPanel)[0];
    }

    return playlist_panel;
  }

  async getRelated(video_id: string): Promise<SectionList | Message> {
    throwIfMissing({ video_id });

    const watch_next_endpoint = new NavigationEndpoint({ watchNextEndpoint: { videoId: video_id } });
    const response = await watch_next_endpoint.call(this.#actions, { client: 'YTMUSIC', parse: true });

    const tabs = response.contents_memo?.getType(Tab);

    const tab = tabs?.find((tab) => tab.endpoint.payload.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_TRACK_RELATED');

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const page = await tab.endpoint.call(this.#actions, { client: 'YTMUSIC', parse: true });

    if (!page.contents)
      throw new InnertubeError('Unexpected response', page);

    return page.contents.item().as(SectionList, Message);
  }

  async getLyrics(video_id: string): Promise<MusicDescriptionShelf | undefined> {
    throwIfMissing({ video_id });

    const watch_next_endpoint = new NavigationEndpoint({ watchNextEndpoint: { videoId: video_id } });
    const response = await watch_next_endpoint.call(this.#actions, { client: 'YTMUSIC', parse: true });

    const tabs = response.contents_memo?.getType(Tab);

    const tab = tabs?.find((tab) => tab.endpoint.payload.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_TRACK_LYRICS');

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

  async getRecap(): Promise<Recap> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEmusic_listening_review' } });
    const response = await browse_endpoint.call(this.#actions, { client: 'YTMUSIC' });
    return new Recap(response, this.#actions);
  }

  async getSearchSuggestions(input: string): Promise<ObservedArray<SearchSuggestionsSection>> {
    const response = await this.#actions.execute('/music/get_search_suggestions', {
      input,
      client: 'YTMUSIC',
      parse: true
    });

    if (!response.contents_memo)
      return [] as unknown as ObservedArray<SearchSuggestionsSection>;

    return response.contents_memo.getType(SearchSuggestionsSection);
  }
}