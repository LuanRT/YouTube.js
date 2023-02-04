import { InnertubeError } from '../../utils/Utils';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import SectionList from '../classes/SectionList';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults';
import Parser, { SectionListContinuation } from '../index';

import type Actions from '../../core/Actions';
import type { ApiResponse } from '../../core/Actions';
import type { ObservedArray } from '../helpers';
import type { IBrowseResponse } from '../types';

class HomeFeed {
  #page: IBrowseResponse;
  #actions: Actions;
  #continuation?: string;

  sections?: ObservedArray<MusicCarouselShelf>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    const tab = this.#page.contents?.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find Home tab.');

    if (tab.key('content').isNull()) {
      if (!this.#page.continuation_contents)
        throw new InnertubeError('Continuation did not have any content.');

      this.#continuation = this.#page.continuation_contents.as(SectionListContinuation).continuation;
      this.sections = this.#page.continuation_contents.as(SectionListContinuation).contents?.as(MusicCarouselShelf);

      return;
    }

    this.#continuation = tab.content?.as(SectionList).continuation;
    this.sections = tab.content?.as(SectionList).contents.as(MusicCarouselShelf);
  }

  /**
   * Retrieves home feed continuation.
   */
  async getContinuation(): Promise<HomeFeed> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/browse', {
      client: 'YTMUSIC',
      continuation: this.#continuation
    });

    return new HomeFeed(response, this.#actions);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}

export default HomeFeed;