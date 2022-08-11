import Parser, { GridContinuation, MusicShelfContinuation, ParsedResponse, SectionListContinuation } from '..';
import Actions from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';
import SectionList from '../classes/SectionList';
import { ObservedArray, YTNode } from '../helpers';

type CONTENT_TYPE = 'history' | 'playlists' | 'albums' | 'songs' | 'artists' | 'subscriptions';

const BROWSE_IDS: { [key: string]: string } = {
  'history': 'FEmusic_history',
  'playlists': 'FEmusic_liked_playlists',
  'albums': 'FEmusic_liked_albums',
  'songs': 'FEmusic_liked_videos',
  'artists': 'FEmusic_library_corpus_track_artists',
  'subscriptions': 'FEmusic_library_corpus_artists'
};

class Library {
  #actions: Actions;

  constructor(actions: Actions) {
    this.#actions = actions;
  }

  async #fetchPage(type: CONTENT_TYPE) {
    const browse_id = BROWSE_IDS[type];
    const response = await this.#actions.browse(browse_id, { client: 'YTMUSIC' });

    return Parser.parseResponse(response.data);
  }

  async #fetchAndParseTabContents(type: CONTENT_TYPE) {

    const getItemsFromDataNode = (node: any) => {
      switch (node?.type) {
        case 'Grid':
          return node.contents?.array() || null;
        case 'MusicShelf':
          return node.contents || null;
        default:
          return null;
      }
    };

    const page = await this.#fetchPage(type);
    const sections: Array<any> = page.contents_memo.get('SectionList')?.[0].as(SectionList).contents.array() || [];
    const contents_section = sections.find((section) => section.header?.type === 'ItemSectionTabbedHeader');
    const data_node = contents_section?.contents?.[0];
    return new LibraryItemList(getItemsFromDataNode(data_node), data_node?.continuation, page, this.#actions);
  }

  async getPlaylists() {
    return this.#fetchAndParseTabContents('playlists');
  }

  async getAlbums() {
    return this.#fetchAndParseTabContents('albums');
  }

  async getArtists() {
    return this.#fetchAndParseTabContents('artists');
  }

  async getSongs() {
    return this.#fetchAndParseTabContents('songs');
  }

  async getSubscriptions() {
    return this.#fetchAndParseTabContents('subscriptions');
  }

  async getRecentActivity(show_all = false) {
    if (show_all) {
      const page = await this.#fetchPage('history');
      const section_list = page.contents_memo.get('SectionList')?.[0].as(SectionList);
      const sections = section_list?.contents?.array() || null;
      return new LibrarySectionList(sections, section_list?.continuation || null, page, this.#actions);
    }

    const page = await this.#fetchPage('songs');
    const sections: Array<any> = page.contents_memo.get('SectionList')?.[0].as(SectionList).contents.array() || [];
    const contents_section = sections.find((section) => section.header?.type === 'MusicCarouselShelfBasicHeader' && section.header?.title.toString() === 'Recent activity');
    const items = contents_section?.contents || null;
    return new LibraryItemList(items, null, page, this.#actions);
  }
}

class LibraryResultsBase {
  #continuation: string | null;
  #page: ParsedResponse;
  #actions: Actions;

  has_continuation: boolean;

  constructor(continuation: string | null, page: ParsedResponse, actions: Actions) {
    this.#continuation = continuation;
    this.#page = page;
    this.#actions = actions;
    this.has_continuation = !!continuation;
  }

  async getContinuation() {
    if (!this.#continuation) {
      throw new InnertubeError('Continuation not found.');
    }

    const response = await this.#actions.browse(this.#continuation, { is_ctoken: true, client: 'YTMUSIC' });
    const page = Parser.parseResponse(response.data);

    if (!page.continuation_contents) {
      throw new InnertubeError('No continuation data found.');
    }

    return this.parseContinuationContents(page);
  }

  get page() {
    return this.#page;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async parseContinuationContents(page: ParsedResponse): Promise<LibraryResultsBase> {
    throw new InnertubeError('parseContinuationContents() not implemented.');
  }
}

class LibraryItemList extends LibraryResultsBase {
  #actions: Actions;

  items: ObservedArray<YTNode> | null;

  constructor(items: ObservedArray<YTNode> | null, continuation: string | null, page: ParsedResponse, actions: Actions) {
    super(continuation, page, actions);
    this.#actions = actions;
    this.items = items;
  }

  async parseContinuationContents(page: ParsedResponse) {
    const data = page.continuation_contents?.as(MusicShelfContinuation, GridContinuation);
    return new LibraryItemList(data?.contents || null, data?.continuation || null, page, this.#actions);
  }
}

class LibrarySectionList extends LibraryResultsBase {
  #actions: Actions;

  sections: ObservedArray<YTNode> | null;

  constructor(sections: ObservedArray<YTNode> | null, continuation: string | null, page: ParsedResponse, actions: Actions) {
    super(continuation, page, actions);
    this.#actions = actions;
    this.sections = sections;
  }

  async parseContinuationContents(page: ParsedResponse) {
    const data = page.continuation_contents?.as(SectionListContinuation);
    return new LibrarySectionList(data?.contents || null, data?.continuation || null, page, this.#actions);
  }
}

export default Library;