import { GridContinuation, Parser } from '../index.js';
import type { IBrowseResponse } from '../types/index.js';
import type { Actions, ApiResponse } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import { observe } from '../helpers.js';
import { InnertubeError } from '../../utils/Utils.js';
import Tab from '../classes/Tab.js';
import TvSecondaryNavSection from '../classes/tv/TvSecondaryNavSection.js';
import Grid from '../classes/Grid.js';
import TvSurfaceContent from '../classes/tv/TvSurfaceContent.js';

export default class MyYoutubeFeed {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;
  readonly #continuation: string | undefined;

  public title?: string;
  public contents?: ObservedArray<YTNode>;
  public tabs?: ObservedArray<Tab>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
    
    const navSection = this.#page.contents_memo?.getType(TvSecondaryNavSection)?.[0];
    
    if (navSection) {
      this.tabs = navSection.tabs ?? undefined;
    }
    
    const selectedTab = this.#page.contents_memo?.getType(Tab).find((t) => t.selected);
    
    if (selectedTab) {
      this.title = selectedTab.title;
      const content = selectedTab.content?.as(TvSurfaceContent)?.content;
      if (content?.is(Grid)) {
        this.contents = content.contents;
        this.#continuation = content.continuation ?? undefined;
      } else {
        throw new InnertubeError(`No supported content type for MyYoutubeFeed provided. Type ${content?.type}`);
      }
    } else if (this.#page.contents_memo?.getType(TvSurfaceContent)?.[0]) {
      const content = this.#page.contents_memo?.getType(TvSurfaceContent)?.[0]?.content;
      if (content?.is(Grid)) {
        this.contents = content.contents;
        this.#continuation = content.continuation ?? undefined;
      } else {
        throw new InnertubeError(`No supported content type for MyYoutubeFeed provided. Type ${content?.type}`);
      }
    }
    
    // Continuations
    if (this.#page.continuation_contents?.is(GridContinuation)) {
      this.contents = this.#page.continuation_contents.contents ?? undefined;
      this.#continuation = this.#page.continuation_contents.continuation;
    }
  }

  /**
   * Retrieves current select tab feed continuation.
   */
  async getContinuation(): Promise<MyYoutubeFeed> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/browse', {
      client: 'TV',
      continuation: this.#continuation
    });

    return new MyYoutubeFeed(response, this.#actions);
  }

  async selectTab(tab: Tab): Promise<MyYoutubeFeed> {
    const response = await tab.endpoint.call(this.#actions, {
      client: 'TV'
    });

    return new MyYoutubeFeed(response, this.#actions);
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