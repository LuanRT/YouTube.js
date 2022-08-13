import Parser, { GridContinuation, MusicShelfContinuation, ParsedResponse, PlaylistPanelContinuation, SectionListContinuation } from '..';
import Actions from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';
import DropdownItem from '../classes/DropdownItem';
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
type SortBy = 'recently_added' | 'a_z' | 'z_a';

const BROWSE_IDS: { [key: string]: string } = {
  'history': 'FEmusic_history',
  'playlists': 'FEmusic_liked_playlists',
  'albums': 'FEmusic_liked_albums',
  'songs': 'FEmusic_liked_videos',
  'artists': 'FEmusic_library_corpus_track_artists',
  'subscriptions': 'FEmusic_library_corpus_artists'
};

const SORT_BY_TEXTS: { [key: string]: string } = {
  'recently_added': 'Recently added',
  'a_z': 'A to Z',
  'z_a': 'Z to A'
};

const SORT_BY_TEXTS_R: { [key: string]: string } = {};
for (const [ key, value ] of Object.entries(SORT_BY_TEXTS)) {
  SORT_BY_TEXTS_R[value] = key;
}

class Library {
  #actions;

  constructor(actions: Actions) {
    this.#actions = actions;
  }

  #getBrowseId(type: ContentType) {
    return BROWSE_IDS[type];
  }

  async #fetchPage(browse_id: string, fetchArgs = {}) {
    const response = await this.#actions.browse(browse_id, { ...fetchArgs, client: 'YTMUSIC' });
    return Parser.parseResponse(response.data);
  }

  /**
   * Fetches the list of library items from the endpoint given by `browse_id`
   * @param browse_id - id of browse endpoint from which contents are fetched
   * @param filter - The filter to apply to fetched items (`null` for no filtering)
   * @param fetchArgs - Args to be included in the fetch payload
   */
  async #fetchAndParseTabContents(browse_id: string, filter: ItemFilter = null, fetchArgs = {}) {

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

    const page = await this.#fetchPage(browse_id, fetchArgs);
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
  async getPlaylists(args?: { sort_by?: SortBy }) {
    const data = await this.#fetchAndParseTabContents(this.#getBrowseId('playlists'), (item) => item.item_type === 'playlist');
    const sort_by = args?.sort_by || null;
    return sort_by ? this.#applySortBy(data, sort_by) : data;
  }

  /**
   * Retrieves the library's albums
   */
  async getAlbums(args?: { sort_by?: SortBy }) {
    const data = await this.#fetchAndParseTabContents(this.#getBrowseId('albums'), (item) => item.item_type === 'album');
    const sort_by = args?.sort_by || null;
    return sort_by ? this.#applySortBy(data, sort_by) : data;
  }

  /**
   * Retrieves the library's artists
   */
  async getArtists(args?: { sort_by?: SortBy }) {
    const data = await this.#fetchAndParseTabContents(this.#getBrowseId('artists'), (item) => item.item_type === 'artist');
    const sort_by = args?.sort_by || null;
    return sort_by ? this.#applySortBy(data, sort_by) : data;
  }

  /**
   * Retrieves the library's songs
   */
  async getSongs(args?: { sort_by?: SortBy | 'random' }) {
    const data = await this.#fetchAndParseTabContents(this.#getBrowseId('songs'), (item) => (item.item_type === 'song' || item.item_type === 'video'));

    const sort_by = args?.sort_by || null;
    const shuffle = (sort_by === 'random');

    const shuffle_endpoint = shuffle ?
      data.all_items.find((item) =>
        item.item_type === 'endpoint' && item.title.toString() === 'Shuffle all'
      )?.endpoint as NavigationEndpoint : null;

    if (shuffle) {
      if (!shuffle_endpoint) {
        if (data.items.length <= 1) {
          return data;
        }
        throw new InnertubeError('Unable to obtain endpoint for sort_by value \'random\'');
      }
      return this.#fetchAndParseShuffledSongs(shuffle_endpoint);
    }

    return sort_by ? this.#applySortBy(data, sort_by) : data;
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
    return new LibraryItemList(items, filter, continuation, page, this.#actions, { sort_by: 'random' });
  }

  /**
   * Retrieves the library's subscriptions
   */
  async getSubscriptions(args?: { sort_by?: SortBy }) {
    const data = await this.#fetchAndParseTabContents(this.#getBrowseId('subscriptions'));
    const sort_by = args?.sort_by || null;
    return sort_by ? this.#applySortBy(data, sort_by) : data;
  }

  /**
   * Applies `sort_by` to `data` and returns the result. Original `data` is not modified.
   */
  async #applySortBy(data: LibraryItemList, sort_by: SortBy) {
    const page = data.page;
    const dropdownItem = page?.contents_memo.get('DropdownItem')?.find(
      (item) => item.as(DropdownItem).label === SORT_BY_TEXTS[sort_by])?.as(DropdownItem);

    if (!dropdownItem?.endpoint?.browse) {
      if (data.items.length <= 1) {
        return data;
      }
      throw new InnertubeError(`Unable to obtain browse endpoint for sort_by value '${sort_by}'`);
    }

    if (dropdownItem?.selected) {
      return data;
    }

    const fetchArgs = { params: dropdownItem.endpoint.browse.params };
    return this.#fetchAndParseTabContents(dropdownItem.endpoint.browse.id, data.filter, fetchArgs);
  }

  /**
   * Retrieves recent activity
   */
  async getRecentActivity(args: {all: boolean}) {
    const all = !!args?.all;
    if (all) {
      const page = await this.#fetchPage(this.#getBrowseId('history'));
      const section_list = page.contents_memo.get('SectionList')?.[0].as(SectionList);
      const sections = section_list?.contents?.array() || [];
      const continuation = section_list?.continuation ? {
        type: 'browse',
        token: section_list?.continuation
      } as Continuation : null;
      return new LibrarySectionList(sections, continuation, page, this.#actions);
    }

    const page = await this.#fetchPage(this.#getBrowseId('songs'));
    const sections = page.contents_memo.get('SectionList')?.[0].as(SectionList).contents.array() as Array<any> || [];
    const contents_section = sections.find(
      (section) => section.header?.type === 'MusicCarouselShelfBasicHeader' && section.header?.title.toString() === 'Recent activity');
    const items = contents_section?.contents || [];
    return new LibraryItemList(items, null, null, page, this.#actions, { sort_by: null });
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
  sort_by: SortBy | 'random' | null;

  constructor(items: Array<any>, filter: ItemFilter, continuation: Continuation | null, page: ParsedResponse, actions: Actions, overrides?: { sort_by: SortBy | 'random' | null }) {
    super(continuation, page, actions);
    this.#filter = filter;
    this.#actions = actions;
    this.#all_items = items;
    this.items = filter ? items.filter(filter) : items;
    this.sort_by = (overrides?.sort_by !== undefined) ? overrides.sort_by : this.#getSortBy();
  }

  async parseContinuationContents(page: ParsedResponse, from_continuation: Continuation) {
    const data = page.continuation_contents?.as(MusicShelfContinuation, GridContinuation, PlaylistPanelContinuation);
    const continuation = data?.continuation ? { ...from_continuation, token: data?.continuation } : null;
    return new LibraryItemList(data?.contents || [], this.#filter, continuation, page, this.#actions, { sort_by: this.sort_by });
  }

  #getSortBy() {
    const selected = this.page?.contents_memo.get('DropdownItem')?.filter((item) => item.as(DropdownItem).selected) as DropdownItem[] || [];
    for (const s of selected) {
      const v = SORT_BY_TEXTS_R[s.label];
      if (v) {
        return v as SortBy;
      }
    }
    return null;
  }

  get all_items() {
    return this.#all_items;
  }

  get filter() {
    return this.#filter;
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