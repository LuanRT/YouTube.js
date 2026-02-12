import { GridContinuation, Parser, SectionListContinuation } from '../index.js';

import type { IBrowseResponse } from '../types/index.js';
import type { Actions, ApiResponse } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import { observe } from '../helpers.js';
import { InnertubeError } from '../../utils/Utils.js';
import Tab from '../classes/Tab.js';
import TvSurfaceContent from '../classes/tv/TvSurfaceContent.js';
import Grid from '../classes/Grid.js';
import SectionList from '../classes/SectionList.js';

export default class SubscriptionsFeed {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;
  readonly #continuation: string | undefined;

  public contents?: ObservedArray<YTNode>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    const surfaceContent = this.#page.contents_memo?.getType(Tab)?.[0]?.content?.as(TvSurfaceContent)?.content;
    if (surfaceContent?.is(Grid, SectionList)) {
      this.contents = surfaceContent.contents;
      this.#continuation = surfaceContent.continuation ?? undefined;
    }

    if (this.#page.continuation_contents) {
      if (this.#page.continuation_contents?.is(GridContinuation, SectionListContinuation)) {
        const data = this.#page.continuation_contents?.as(GridContinuation, SectionListContinuation);
        if (!data.contents) {
          throw new InnertubeError('No contents found in the response');
        }
        this.contents = data.contents;
        this.#continuation = data.continuation ?? undefined;
      }
    }
  }

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