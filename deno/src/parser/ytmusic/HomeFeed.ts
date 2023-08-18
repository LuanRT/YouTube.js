import Parser, { SectionListContinuation } from '../index.ts';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';
import SectionList from '../classes/SectionList.ts';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.ts';
import MusicTastebuilderShelf from '../classes/MusicTastebuilderShelf.ts';

import type Actions from '../../core/Actions.ts';
import type { ApiResponse } from '../../core/Actions.ts';
import type { ObservedArray } from '../helpers.ts';
import type { IBrowseResponse } from '../types/ParsedResponse.ts';
import { InnertubeError } from '../../utils/Utils.ts';
import ChipCloud from '../classes/ChipCloud.ts';
import ChipCloudChip from '../classes/ChipCloudChip.ts';

class HomeFeed {
  #page: IBrowseResponse;
  #actions: Actions;
  #continuation?: string;

  sections?: ObservedArray<MusicCarouselShelf | MusicTastebuilderShelf>;
  header?: ChipCloud;

  constructor(response: ApiResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);

    const tab = this.#page.contents?.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find Home tab.');

    if (tab.content === null) {
      if (!this.#page.continuation_contents)
        throw new InnertubeError('Continuation did not have any content.');

      this.#continuation = this.#page.continuation_contents.as(SectionListContinuation).continuation;
      this.sections = this.#page.continuation_contents.as(SectionListContinuation).contents?.as(MusicCarouselShelf);

      return;
    }

    this.header = tab.content?.as(SectionList).header?.as(ChipCloud);
    this.#continuation = tab.content?.as(SectionList).continuation;
    this.sections = tab.content?.as(SectionList).contents.as(MusicCarouselShelf, MusicTastebuilderShelf);
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

  async applyFilter(target_filter: string | ChipCloudChip): Promise<HomeFeed> {
    let cloud_chip: ChipCloudChip | undefined;

    if (typeof target_filter === 'string') {
      cloud_chip = this.header?.chips?.as(ChipCloudChip).get({ text: target_filter });
      if (!cloud_chip)
        throw new InnertubeError('Could not find filter with given name.', { available_filters: this.filters });
    } else if (target_filter?.is(ChipCloudChip)) {
      cloud_chip = target_filter;
    }

    if (!cloud_chip)
      throw new InnertubeError('Invalid filter', { available_filters: this.filters });

    if (cloud_chip?.is_selected) return this;

    if (!cloud_chip.endpoint)
      throw new InnertubeError('Selected filter does not have an endpoint.');

    const response = await cloud_chip.endpoint.call(this.#actions, { client: 'YTMUSIC' });
    return new HomeFeed(response, this.#actions);
  }

  get filters(): string[] {
    return this.header?.chips?.as(ChipCloudChip).map((chip) => chip.text) || [];
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}

export default HomeFeed;