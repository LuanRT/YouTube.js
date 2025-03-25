import { Parser, PlaylistVideoListContinuation } from '../index.js';

import { InnertubeError } from '../../utils/Utils.js';
import type { YTNode } from '../helpers.js';
import { observe, type ObservedArray } from '../helpers.js';
import type { ApiResponse, Actions } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';
import type MusicThumbnail from '../classes/MusicThumbnail.js';
import TwoColumn from '../classes/TwoColumn.js';
import type EntityMetadata from '../classes/EntityMetadata.js';

export default class Playlist {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;
  readonly #continuation: string | null;

  public header?: EntityMetadata;
  public contents?: ObservedArray<YTNode>;
  public background?: MusicThumbnail;

  // #last_fetched_suggestions: ObservedArray<MusicResponsiveListItem> | null;
  // #suggestions_continuation: string | null;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    this.#continuation = null;
    
    const two_col = this.#page.contents_memo?.getType(TwoColumn)?.first();
    if (two_col) {
      this.header = two_col.left_column ?? undefined;
      
      if (two_col.right_column) {
        this.#continuation = two_col.right_column.continuation ?? null;
        this.contents = two_col.right_column.videos ?? null;
      }
    }
    
    if (this.#page.continuation_contents) {
      const data = this.#page.continuation_contents?.as(PlaylistVideoListContinuation);
      if (!data.contents) {
        throw new InnertubeError('No contents found in the response');
      }
      this.contents = data.contents;
      this.#continuation = data.continuation ?? null;
    }
  }

  /**
   * Retrieves playlist items continuation.
   */
  async getContinuation(): Promise<Playlist> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/browse', {
      client: 'TV',
      continuation: this.#continuation
    });

    return new Playlist(response, this.#actions);
  }

  get page(): IBrowseResponse {
    return this.#page;
  }

  get items(): ObservedArray<YTNode> {
    return this.contents || observe([]);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }
}