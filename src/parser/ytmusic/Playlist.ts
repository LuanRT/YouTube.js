// noinspection ES6MissingAwait

import { MusicPlaylistShelfContinuation, Parser, SectionListContinuation } from '../index.js';

import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicDetailHeader from '../classes/MusicDetailHeader.js';
import MusicEditablePlaylistDetailHeader from '../classes/MusicEditablePlaylistDetailHeader.js';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf.js';
import MusicShelf from '../classes/MusicShelf.js';
import SectionList from '../classes/SectionList.js';
import MusicResponsiveListItem from '../classes/MusicResponsiveListItem.js';
import MusicResponsiveHeader from '../classes/MusicResponsiveHeader.js';

import { InnertubeError } from '../../utils/Utils.js';
import { observe, type ObservedArray } from '../helpers.js';
import type { Actions, ApiResponse } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';
import type MusicThumbnail from '../classes/MusicThumbnail.js';
import ContinuationItem from '../classes/ContinuationItem.js';
import AppendContinuationItemsAction from '../classes/actions/AppendContinuationItemsAction.js';

export default class Playlist {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;
  readonly #continuation?: string | ContinuationItem;

  public header?: MusicResponsiveHeader | MusicDetailHeader | MusicEditablePlaylistDetailHeader;
  public contents?: ObservedArray<MusicResponsiveListItem | ContinuationItem>;
  public background?: MusicThumbnail;

  #last_fetched_suggestions: ObservedArray<MusicResponsiveListItem> | null;
  #suggestions_continuation: string | null;
  
  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    this.#last_fetched_suggestions = null;
    this.#suggestions_continuation = null;

    if (this.#page.continuation_contents) {
      const data = this.#page.continuation_contents?.as(MusicPlaylistShelfContinuation);
      if (!data.contents)
        throw new InnertubeError('No contents found in the response');
      this.contents = data.contents.as(MusicResponsiveListItem, ContinuationItem);
      const continuation_item = this.contents.firstOfType(ContinuationItem);
      this.#continuation = data.continuation || continuation_item;
    } else if (this.#page.contents_memo) {
      this.header = this.#page.contents_memo.getType(MusicResponsiveHeader, MusicEditablePlaylistDetailHeader, MusicDetailHeader)?.[0];
      this.contents = this.#page.contents_memo.getType(MusicPlaylistShelf)?.[0]?.contents.as(MusicResponsiveListItem, ContinuationItem) || observe([]);
      this.background = this.#page.background;
      const continuation_item = this.contents.firstOfType(ContinuationItem);
      this.#continuation = this.#page.contents_memo.getType(MusicPlaylistShelf)?.[0]?.continuation || continuation_item;
    } else if (this.#page.on_response_received_actions) {
      const append_continuation_action = this.#page.on_response_received_actions.firstOfType(AppendContinuationItemsAction);
      this.contents = append_continuation_action?.contents?.as(MusicResponsiveListItem, ContinuationItem);
      this.#continuation = this.contents?.firstOfType(ContinuationItem);
    }
  }

  /**
   * Retrieves playlist items continuation.
   */
  async getContinuation(): Promise<Playlist> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    let response: ApiResponse;
    
    if (typeof this.#continuation === 'string') {
      response = await this.#actions.execute('/browse', {
        client: 'YTMUSIC',
        continuation: this.#continuation
      });
    } else {
      response = await this.#continuation.endpoint.call(this.#actions, { client: 'YTMUSIC' });
    }
    
    return new Playlist(response, this.#actions);
  }

  /**
   * Retrieves related playlists
   */
  async getRelated(): Promise<MusicCarouselShelf> {
    const target_section_list = this.#page.contents_memo?.getType(SectionList).find((section_list) => section_list.continuation);

    if (!target_section_list)
      throw new InnertubeError('Could not find "Related" section.');

    let section_continuation = target_section_list.continuation;

    while (section_continuation) {
      const data = await this.#actions.execute('/browse', {
        client: 'YTMUSIC',
        continuation: section_continuation,
        parse: true
      });

      const section_list = data.continuation_contents?.as(SectionListContinuation);
      const sections = section_list?.contents?.as(MusicCarouselShelf, MusicShelf);

      const related = sections?.find((section) => section.is(MusicCarouselShelf))?.as(MusicCarouselShelf);

      if (related)
        return related;

      section_continuation = section_list?.continuation;
    }

    throw new InnertubeError('Could not fetch related playlists.');
  }

  async getSuggestions(refresh = true): Promise<ObservedArray<MusicResponsiveListItem>> {
    const require_fetch = refresh || !this.#last_fetched_suggestions;
    const fetch_promise = require_fetch ? this.#fetchSuggestions() : Promise.resolve(null);
    const fetch_result = await fetch_promise;

    if (fetch_result) {
      this.#last_fetched_suggestions = fetch_result.items;
      this.#suggestions_continuation = fetch_result.continuation;
    }

    return fetch_result?.items || this.#last_fetched_suggestions || observe([]);
  }

  async #fetchSuggestions(): Promise<{ items: ObservedArray<MusicResponsiveListItem>, continuation: string | null }> {
    const target_section_list = this.#page.contents_memo?.getType(SectionList).find((section_list) => section_list.continuation);
    const continuation = this.#suggestions_continuation || target_section_list?.continuation;

    if (continuation) {
      const page = await this.#actions.execute('/browse', {
        client: 'YTMUSIC',
        continuation: continuation,
        parse: true
      });

      const section_list = page.continuation_contents?.as(SectionListContinuation);
      const sections = section_list?.contents?.as(MusicCarouselShelf, MusicShelf);

      const suggestions = sections?.find((section) => section.is(MusicShelf))?.as(MusicShelf);

      return {
        items: suggestions?.contents || observe([]),
        continuation: suggestions?.continuation || null
      };
    }

    return {
      items: observe([]),
      continuation: null
    };
  }

  get page(): IBrowseResponse {
    return this.#page;
  }

  get items(): ObservedArray<MusicResponsiveListItem | ContinuationItem> {
    return this.contents || observe([]);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }
}