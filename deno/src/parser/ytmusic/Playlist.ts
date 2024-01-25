import { Parser, MusicPlaylistShelfContinuation, SectionListContinuation } from '../index.ts';

import MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';
import MusicDetailHeader from '../classes/MusicDetailHeader.ts';
import MusicEditablePlaylistDetailHeader from '../classes/MusicEditablePlaylistDetailHeader.ts';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf.ts';
import MusicShelf from '../classes/MusicShelf.ts';
import SectionList from '../classes/SectionList.ts';

import { InnertubeError } from '../../utils/Utils.ts';
import type { ObservedArray, YTNode } from '../helpers.ts';
import type { ApiResponse, Actions } from '../../core/index.ts';
import type { IBrowseResponse } from '../types/index.ts';
import type MusicResponsiveListItem from '../classes/MusicResponsiveListItem.ts';

class Playlist {
  #page: IBrowseResponse;
  #actions: Actions;
  #continuation: string | null;
  #last_fetched_suggestions: any;
  #suggestions_continuation: any;

  header?: MusicDetailHeader;
  items?: ObservedArray<YTNode> | null;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    this.#last_fetched_suggestions = null;
    this.#suggestions_continuation = null;

    if (this.#page.continuation_contents) {
      const data = this.#page.continuation_contents?.as(MusicPlaylistShelfContinuation);
      this.items = data.contents;
      this.#continuation = data.continuation;
    } else {
      if (this.#page.header?.item().type === 'MusicEditablePlaylistDetailHeader') {
        this.header = this.#page.header?.item().as(MusicEditablePlaylistDetailHeader).header?.as(MusicDetailHeader);
      } else {
        this.header = this.#page.header?.item().as(MusicDetailHeader);
      }
      this.items = this.#page.contents_memo?.getType(MusicPlaylistShelf).first().contents || null;
      this.#continuation = this.#page.contents_memo?.getType(MusicPlaylistShelf).first().continuation || null;
    }
  }

  /**
   * Retrieves playlist items continuation.
   */
  async getContinuation(): Promise<Playlist> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      continuation: this.#continuation
    });

    return new Playlist(response, this.#actions);
  }

  /**
   * Retrieves related playlists
   */
  async getRelated(): Promise<MusicCarouselShelf> {
    let section_continuation = this.#page.contents_memo?.getType(SectionList)?.[0].continuation;

    while (section_continuation) {
      const data = await this.#actions.execute('/browse', {
        client: 'YTMUSIC',
        continuation: section_continuation,
        parse: true
      });

      const section_list = data.continuation_contents?.as(SectionListContinuation);
      const sections = section_list?.contents?.as(MusicCarouselShelf, MusicShelf);

      const related = sections?.matchCondition((section) => section.is(MusicCarouselShelf))?.as(MusicCarouselShelf);

      if (related)
        return related;

      section_continuation = section_list?.continuation;
    }

    throw new InnertubeError('Target section not found.');
  }

  async getSuggestions(refresh = true) {
    const require_fetch = refresh || !this.#last_fetched_suggestions;
    const fetch_promise = require_fetch ? this.#fetchSuggestions() : Promise.resolve(null);
    const fetch_result = await fetch_promise;

    if (fetch_result) {
      this.#last_fetched_suggestions = fetch_result.items;
      this.#suggestions_continuation = fetch_result.continuation;
    }

    return fetch_result?.items || this.#last_fetched_suggestions;
  }

  async #fetchSuggestions(): Promise<{ items: never[] | ObservedArray<MusicResponsiveListItem>, continuation: string | null }> {
    const continuation = this.#suggestions_continuation || this.#page.contents_memo?.get('SectionList')?.[0].as(SectionList).continuation;

    if (continuation) {
      const page = await this.#actions.execute('/browse', {
        client: 'YTMUSIC',
        continuation: continuation,
        parse: true
      });

      const section_list = page.continuation_contents?.as(SectionListContinuation);
      const sections = section_list?.contents?.as(MusicCarouselShelf, MusicShelf);

      const suggestions = sections?.matchCondition((section) => section.is(MusicShelf))?.as(MusicShelf);

      return {
        items: suggestions?.contents || [],
        continuation: suggestions?.continuation || null
      };
    }

    return {
      items: [],
      continuation: null
    };
  }

  get page(): IBrowseResponse {
    return this.#page;
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }
}

export default Playlist;