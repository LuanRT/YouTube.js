import { GridContinuation, Parser } from '../index.js';

import type { IBrowseResponse } from '../types/index.js';
import type { Actions, ApiResponse } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import { observe } from '../helpers.js';
import { InnertubeError } from '../../utils/Utils.js';
import Tab from '../classes/Tab.js';
import TvSurfaceContent from '../classes/tv/TvSurfaceContent.js';
import Grid from '../classes/Grid.js';

export default class SubscriptionsFeed {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;
  readonly #continuation: string | undefined;

  public contents?: ObservedArray<YTNode>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    const grid = this.#page.contents_memo?.getType(Tab)?.first()?.content?.as(TvSurfaceContent)?.content?.as(Grid);
    if (grid) {
      this.contents = grid.contents;
      this.#continuation = grid.continuation ?? undefined;
    }

    if (this.#page.continuation_contents) {
      const data = this.#page.continuation_contents?.as(GridContinuation);
      if (!data.contents) {
        throw new InnertubeError('No contents found in the response');
      }
      this.contents = data.contents;
      this.#continuation = data.continuation ?? undefined;
    }
  }
  
  // TODO: Add option to switch to other tabs (other channels) available

  /**
   * Retrieves subscription items continuation.
   */
  async getContinuation(): Promise<SubscriptionsFeed> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/browse', {
      client: 'TV',
      continuation: this.#continuation
    });

    return new SubscriptionsFeed(response, this.#actions);
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