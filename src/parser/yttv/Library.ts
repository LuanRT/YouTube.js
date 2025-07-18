import { GridContinuation, Parser, SectionListContinuation, TvSurfaceContentContinuation } from '../index.js';

import type { IBrowseResponse } from '../types/index.js';
import type { Actions, ApiResponse } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import { observe } from '../helpers.js';
import { InnertubeError } from '../../utils/Utils.js';
import SectionList from '../classes/SectionList.js';
import type Tile from '../classes/Tile.js';
import TvSurfaceContent from '../classes/tv/TvSurfaceContent.js';
import Grid from '../classes/Grid.js';

export default class Library {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;
  readonly #continuation: string | undefined;
  
  public contents?: ObservedArray<YTNode>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    const tvSurfaceContent = this.#page.contents_memo?.getType(TvSurfaceContent)?.first();
    
    if (tvSurfaceContent) {
      if (tvSurfaceContent.content?.is(SectionList)) {
        this.contents = tvSurfaceContent.content.contents;
        this.#continuation = tvSurfaceContent.content.continuation;
      } else if (tvSurfaceContent.content?.is(Grid)) {
        this.contents = tvSurfaceContent.content.contents;
        this.#continuation = tvSurfaceContent.content.continuation ?? undefined;
      }
    }

    if (this.#page.continuation_contents) {
      if (this.#page.continuation_contents?.is(SectionListContinuation)) {
        const data = this.#page.continuation_contents?.as(SectionListContinuation);
        if (!data.contents) {
          throw new InnertubeError('No contents found in the response');
        }
        this.contents = data.contents;
        this.#continuation = data.continuation ?? undefined;
      } else if (this.#page.continuation_contents?.is(GridContinuation)) {
        const data = this.#page.continuation_contents?.as(GridContinuation);
        this.contents = data.contents ?? undefined;
        this.#continuation = data.continuation ?? undefined;
      } else if (this.#page.continuation_contents?.is(TvSurfaceContentContinuation)) {
        const data = this.#page.continuation_contents?.as(TvSurfaceContentContinuation);
        // Nested data
        if (data?.content?.is(Grid)) {
          this.contents = data?.content.contents ?? undefined;
          this.#continuation = data?.content.continuation ?? undefined;
        }
      }
    }
  }
  
  async selectButtonTile(tile: Tile) {
    if (tile.style === 'TILE_STYLE_YTLR_WORMHOLE_RECTANGULAR' && tile.content_id && [ 'FEhistory', 'FEplaylist_aggregation' ].includes(tile.content_id)) {
      const response = await tile.on_select_endpoint.call(this.#actions, {
        client: 'TV'
      });

      return new Library(response, this.#actions);
    } 
    throw new InnertubeError(`Tile with content_id ${tile.content_id} not found`);
    
  }

  /**
   * Retrieves library items continuation.
   */
  async getContinuation(): Promise<Library> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/browse', {
      client: 'TV',
      continuation: this.#continuation
    });

    return new Library(response, this.#actions);
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