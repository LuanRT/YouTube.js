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

import Tab from '../parser/classes/Tab';
import Tabbed from '../parser/classes/Tabbed';
import SingleColumnMusicWatchNextResults from '../parser/classes/SingleColumnMusicWatchNextResults';
import WatchNextTabbedResults from '../parser/classes/WatchNextTabbedResults';
import SectionList from '../parser/classes/SectionList';

import Message from '../parser/classes/Message';
import MusicQueue from '../parser/classes/MusicQueue';
import PlaylistPanel from '../parser/classes/PlaylistPanel';
import MusicDescriptionShelf from '../parser/classes/MusicDescriptionShelf';
import MusicCarouselShelf from '../parser/classes/MusicCarouselShelf';
import SearchSuggestionsSection from '../parser/classes/SearchSuggestionsSection';
import AutomixPreviewVideo from '../parser/classes/AutomixPreviewVideo';
import MusicTwoRowItem from '../parser/classes/MusicTwoRowItem';

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
   * Retrives track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.
   * @param target - video id or a list item.
   */
  getInfo(target: string | MusicTwoRowItem): Promise<TrackInfo> {
    if (target instanceof MusicTwoRowItem) {
      return this.#fetchInfoFromListItem(target);
    } else if (typeof target === 'string') {
      return this.#fetchInfoFromVideoId(target);
    }

    throw new InnertubeError('Invalid target, expected either a video id or a valid MusicTwoRowItem', target);
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

  async #fetchInfoFromListItem(list_item: MusicTwoRowItem | undefined) {
    if (!list_item)
      throw new InnertubeError('List item cannot be undefined');

    if (!list_item.endpoint)
      throw new Error('This item does not have an endpoint.');

    const cpn = generateRandomString(16);

    const initial_info = list_item.endpoint.callTest(this.#actions, {
      cpn,
      client: 'YTMUSIC',
      playbackContext: {
        contentPlaybackContext: {
          signatureTimestamp: this.#session.player.sts
        }
      }
    });

    const continuation = list_item.endpoint.callTest(this.#actions, {
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
  } = {}): Promise<Search> {
    throwIfMissing({ query });
    const response = await this.#actions.search({ query, filters, client: 'YTMUSIC' });
    return new Search(response, this.#actions, { is_filtered: Reflect.has(filters, 'type') && filters.type !== 'all' });
  }

  /**
   * Retrieves the home feed.
   */
  async getHomeFeed(): Promise<HomeFeed> {
    const response = await this.#actions.browse('FEmusic_home', { client: 'YTMUSIC' });
    return new HomeFeed(response, this.#actions);
  }

  /**
   * Retrieves the Explore feed.
   */
  async getExplore(): Promise<Explore> {
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
  async getArtist(artist_id: string): Promise<Artist> {
    throwIfMissing({ artist_id });

    if (!artist_id.startsWith('UC') && !artist_id.startsWith('FEmusic_library_privately_owned_artist'))
      throw new InnertubeError('Invalid artist id', artist_id);

    const response = await this.#actions.browse(artist_id, { client: 'YTMUSIC' });
    return new Artist(response, this.#actions);
  }

  /**
   * Retrieves album.
   */
  async getAlbum(album_id: string): Promise<Album> {
    throwIfMissing({ album_id });

    if (!album_id.startsWith('MPR') && !album_id.startsWith('FEmusic_library_privately_owned_release'))
      throw new InnertubeError('Invalid album id', album_id);

    const response = await this.#actions.browse(album_id, { client: 'YTMUSIC' });
    return new Album(response, this.#actions);
  }

  /**
   * Retrieves playlist.
   */
  async getPlaylist(playlist_id: string): Promise<Playlist> {
    throwIfMissing({ playlist_id });

    if (!playlist_id.startsWith('VL')) {
      playlist_id = `VL${playlist_id}`;
    }

    const response = await this.#actions.browse(playlist_id, { client: 'YTMUSIC' });
    return new Playlist(response, this.#actions);
  }

  /**
   * Retrieves up next.
   */
  async getUpNext(video_id: string, automix = true): Promise<PlaylistPanel> {
    throwIfMissing({ video_id });

    const data = await this.#actions.execute('/next', {
      videoId: video_id,
      client: 'YTMUSIC',
      parse: true
    });

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

    const playlist_panel = music_queue.content.as(PlaylistPanel);

    if (!playlist_panel.playlist_id && automix) {
      const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo);

      if (!automix_preview_video)
        throw new InnertubeError('Automix item not found');

      const page = await automix_preview_video.playlist_video?.endpoint.callTest(this.#actions, {
        videoId: video_id,
        client: 'YTMUSIC',
        parse: true
      });

      if (!page)
        throw new InnertubeError('Could not fetch automix');

      return page.contents_memo.getType(PlaylistPanel)?.[0];
    }

    return playlist_panel;
  }

  /**
   * Retrieves related content.
   */
  async getRelated(video_id: string): Promise<ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>> {
    throwIfMissing({ video_id });

    const data = await this.#actions.execute('/next', {
      videoId: video_id,
      client: 'YTMUSIC',
      parse: true
    });

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
   * Retrieves song lyrics.
   */
  async getLyrics(video_id: string): Promise<MusicDescriptionShelf | undefined> {
    throwIfMissing({ video_id });

    const data = await this.#actions.execute('/next', {
      videoId: video_id,
      client: 'YTMUSIC',
      parse: true
    });

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