import Parser, { GridContinuation, MusicShelfContinuation, ParsedResponse, PlaylistPanelContinuation, SectionListContinuation } from '..';
import Actions from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';
import NavigationEndpoint from '../classes/NavigationEndpoint';
import PlaylistPanel from '../classes/PlaylistPanel';
import SectionList from '../classes/SectionList';

type ContentType = 'history' | 'playlists' | 'albums' | 'songs' | 'artists' | 'subscriptions';
type Continuation = {
  type: 'browse' | 'next';
  token: string,
  payload?: {}
};
type ItemFilter = ((item: any) => boolean) | null;

const BROWSE_IDS: { [key: string]: string } = {
  'history': 'FEmusic_history',
  'playlists': 'FEmusic_liked_playlists',
  'albums': 'FEmusic_liked_albums',
  'songs': 'FEmusic_liked_videos',
  'artists': 'FEmusic_library_corpus_track_artists',
  'subscriptions': 'FEmusic_library_corpus_artists'
};

class Library {
  #actions;

  constructor(actions: Actions) {
    this.#actions = actions;
  }

  async #fetchPage(type: ContentType) {
    const browse_id = BROWSE_IDS[type];
    const response = await this.#actions.browse(browse_id, { client: 'YTMUSIC' });

    return Parser.parseResponse(response.data);
  }

  /**
   * Fetches and returns the list of library items specified by `type`
   * @param type - The type of content to fetch
   * @param filter - The filter to apply to fetched items (`null` for no filtering)
   */
  async #fetchAndParseTabContents(type: ContentType, filter: ItemFilter = null) {

    const getItemsFromDataNode = (node: any) => {
      switch (node?.type) {
        case 'Grid':
          return node.contents?.array();
        case 'MusicShelf':
          return node.contents;
        default:
          return [];
      }
    };

    const page = await this.#fetchPage(type);
    const sections = page.contents_memo.get('SectionList')?.[0].as(SectionList).contents.array() as Array<any> || [];
    const contents_section = sections.find((section) => section.header?.type === 'ItemSectionTabbedHeader');
    const data_node = contents_section?.contents?.[0];
    const continuation = data_node?.continuation ? {
      type: 'browse',
      token: data_node?.continuation
    } as Continuation : null;
    return new LibraryItemList(getItemsFromDataNode(data_node) || [], filter, continuation, page, this.#actions);
  }

  /**
   * Retrieves the library's playlists
   */
  async getPlaylists() {
    return await this.#fetchAndParseTabContents('playlists', (item) => item.item_type === 'playlist');
  }

  /**
   * Retrieves the library's albums
   */
  async getAlbums() {
    return this.#fetchAndParseTabContents('albums', (item) => item.item_type === 'album');
  }

  /**
   * Retrieves the library's artists
   */
  async getArtists() {
    return this.#fetchAndParseTabContents('artists', (item) => item.item_type === 'artist');
  }

  /**
   * Retrieves the library's songs
   * @param shuffle - Whether to retrieve a shuffled list of songs (default: `false`)
   */
  async getSongs(shuffle = false) {
    const result = await this.#fetchAndParseTabContents('songs', (item) => (item.item_type === 'song' || item.item_type === 'video'));

    const shuffle_endpoint = shuffle ?
      result.all_items.find((item) =>
        item.item_type === 'endpoint' && item.title.toString() === 'Shuffle all'
      )?.endpoint as NavigationEndpoint : null;

    return !shuffle_endpoint ? result : this.#fetchAndParseShuffledSongs(shuffle_endpoint);
  }

  /**
   * Fetches and returns a list of shuffled songs
   * @param endpoint - The endpoint of the playlist containing the shuffled songs
   */
  async #fetchAndParseShuffledSongs(endpoint: NavigationEndpoint) {
    const payload = {
      playlist_id: endpoint.payload.playlistId,
      params: endpoint.payload.params
    };
    const response = await this.#actions.next({ ...payload, client: 'YTMUSIC' });
    const page = Parser.parseResponse(response.data);
    const playlist_panel = page.contents_memo.get('PlaylistPanel')?.[0].as(PlaylistPanel);
    const items = playlist_panel?.contents || [];
    const continuation = playlist_panel?.continuation ? {
      type: 'next',
      token: playlist_panel?.continuation,
      payload
    } as Continuation : null;
    const filter = (item: any) => item.type === 'PlaylistPanelVideo';
    return new LibraryItemList(items, filter, continuation, page, this.#actions);
  }

  /**
   * Retrieves the library's subscriptions
   */
  async getSubscriptions() {
    return this.#fetchAndParseTabContents('subscriptions');
  }

  /**
   * Retrieves recent activity
   * @param show_all - Whether to retrieve all recent activity (default: `false`)
   */
  async getRecentActivity(show_all = false) {
    if (show_all) {
      const page = await this.#fetchPage('history');
      const section_list = page.contents_memo.get('SectionList')?.[0].as(SectionList);
      const sections = section_list?.contents?.array() || [];
      const continuation = section_list?.continuation ? {
        type: 'browse',
        token: section_list?.continuation
      } as Continuation : null;
      return new LibrarySectionList(sections, continuation, page, this.#actions);
    }

    const page = await this.#fetchPage('songs');
    const sections = page.contents_memo.get('SectionList')?.[0].as(SectionList).contents.array() as Array<any> || [];
    const contents_section = sections.find(
      (section) => section.header?.type === 'MusicCarouselShelfBasicHeader' && section.header?.title.toString() === 'Recent activity');
    const items = contents_section?.contents || [];
    return new LibraryItemList(items, null, null, page, this.#actions);
  }
}

abstract class LibraryResultsBase {
  #continuation;
  #page;
  #actions;
  has_continuation: boolean;

  constructor(continuation: Continuation | null, page: ParsedResponse, actions: Actions) {
    this.#continuation = continuation;
    this.#page = page;
    this.#actions = actions;
    this.has_continuation = !!continuation;
  }

  async getContinuation() {
    if (!this.#continuation) {
      throw new InnertubeError('Continuation not found.');
    }

    let responsePromise;
    const payload = this.#continuation.payload || {};
    switch (this.#continuation.type) {
      case 'next':
        responsePromise = this.#actions.next({ ...payload, ctoken: this.#continuation.token, client: 'YTMUSIC' });
        break;
      default:
        responsePromise = this.#actions.browse(this.#continuation.token, { ...payload, is_ctoken: true, client: 'YTMUSIC' });
    }
    const response = await responsePromise;
    const page = Parser.parseResponse(response.data);

    if (!page.continuation_contents) {
      throw new InnertubeError('No continuation data found.');
    }

    return this.parseContinuationContents(page, this.#continuation);
  }

  get page() {
    return this.#page;
  }

  abstract parseContinuationContents(page: ParsedResponse, from_continuation: Continuation): Promise<LibraryResultsBase>;
}

class LibraryItemList extends LibraryResultsBase {
  #filter;
  #actions;
  #all_items; // Unfiltered items
  items; // Items after applying filter (if any)

  constructor(items: Array<any>, filter: ItemFilter, continuation: Continuation | null, page: ParsedResponse, actions: Actions) {
    super(continuation, page, actions);
    this.#filter = filter;
    this.#actions = actions;
    this.#all_items = items;
    this.items = filter ? items.filter(filter) : items;

  }

  async parseContinuationContents(page: ParsedResponse, from_continuation: Continuation) {
    const data = page.continuation_contents?.as(MusicShelfContinuation, GridContinuation, PlaylistPanelContinuation);
    const continuation = data?.continuation ? { ...from_continuation, token: data?.continuation } : null;
    return new LibraryItemList(data?.contents || [], this.#filter, continuation, page, this.#actions);
  }

  get all_items() {
    return this.#all_items;
  }
}

class LibrarySectionList extends LibraryResultsBase {
  #actions;
  sections;

  constructor(sections: Array<any>, continuation: Continuation | null, page: ParsedResponse, actions: Actions) {
    super(continuation, page, actions);
    this.#actions = actions;
    this.sections = sections;
  }

  async parseContinuationContents(page: ParsedResponse, from_continuation: Continuation) {
    const data = page.continuation_contents?.as(SectionListContinuation);
    const continuation = data?.continuation ? { ...from_continuation, token: data?.continuation } : null;
    return new LibrarySectionList(data?.contents || [], continuation, page, this.#actions);
  }
}

export default Library;