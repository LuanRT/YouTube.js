import type { IBrowseResponse } from '../types/index.js';
import type { Actions, ApiResponse } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import SectionList from '../classes/SectionList.js';
import { InnertubeError } from '../../utils/Utils.js';
import { Parser, SectionListContinuation } from '../index.js';

export default class HomeFeed {
  readonly #page: IBrowseResponse;
  readonly #actions: Actions;
  readonly #continuation?: string;

  sections?: ObservedArray<YTNode>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
    
    const sectionList = this.#page.contents_memo?.getType(SectionList).firstOfType(SectionList);
    
    this.sections = sectionList?.contents;
    this.#continuation = sectionList?.continuation;
    
    if (!sectionList) {
      if (!this.#page.continuation_contents) {
        throw new InnertubeError('Continuation did not have any content.');
      }
      
      const sectionListContinuation = this.#page.continuation_contents.as(SectionListContinuation);
      this.#continuation = sectionListContinuation.continuation;
      this.sections = sectionListContinuation.contents ?? undefined;
    }
  }

  /**
   * Retrieves home feed continuation.
   */
  async getContinuation(): Promise<HomeFeed> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/browse', {
      client: 'TV',
      continuation: this.#continuation
    });

    return new HomeFeed(response, this.#actions);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }
}