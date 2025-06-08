import { InnertubeError } from '../../utils/Utils.js';
import { Parser, MusicShelfContinuation } from '../index.js';

import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import DidYouMean from '../classes/DidYouMean.js';
import ItemSection from '../classes/ItemSection.js';
import Message from '../classes/Message.js';
import MusicCardShelf from '../classes/MusicCardShelf.js';
import MusicHeader from '../classes/MusicHeader.js';
import MusicShelf from '../classes/MusicShelf.js';
import SectionList from '../classes/SectionList.js';
import ShowingResultsFor from '../classes/ShowingResultsFor.js';
import TabbedSearchResults from '../classes/TabbedSearchResults.js';

import type { ObservedArray } from '../helpers.js';
import type { ISearchResponse } from '../types/index.js';
import type { ApiResponse, Actions } from '../../core/index.js';

export default class Search {
  readonly #page: ISearchResponse;
  readonly #actions: Actions;
  readonly #continuation?: string;

  public header?: ChipCloud;
  public contents?: ObservedArray<MusicShelf | MusicCardShelf | ItemSection>;

  constructor(response: ApiResponse, actions: Actions, is_filtered?: boolean) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<ISearchResponse>(response.data);

    if (!this.#page.contents || !this.#page.contents_memo)
      throw new InnertubeError('Response did not contain any contents.');

    const tab = this.#page.contents.item().as(TabbedSearchResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const tab_content = tab.content?.as(SectionList);

    if (!tab_content)
      throw new InnertubeError('Target tab did not have any content.');

    this.header = tab_content.header?.as(ChipCloud);
    this.contents = tab_content.contents.as(MusicShelf, MusicCardShelf, ItemSection);

    if (is_filtered) {
      this.#continuation = this.contents.firstOfType(MusicShelf)?.continuation;
    }
  }

  /**
   * Loads more items for the given shelf.
   */
  async getMore(shelf: MusicShelf | undefined): Promise<Search> {
    if (!shelf || !shelf.endpoint)
      throw new InnertubeError('Cannot retrieve more items for this shelf because it does not have an endpoint.');

    const response = await shelf.endpoint.call(this.#actions, { client: 'YTMUSIC' });

    if (!response)
      throw new InnertubeError('Endpoint did not return any data');

    return new Search(response, this.#actions, true);
  }

  /**
   * Retrieves search continuation. Only available for filtered searches and shelf continuations.
   */
  async getContinuation(): Promise<SearchContinuation> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/search', {
      continuation: this.#continuation,
      client: 'YTMUSIC'
    });

    return new SearchContinuation(this.#actions, response);
  }

  /**
   * Applies given filter to the search.
   */
  async applyFilter(target_filter: string | ChipCloudChip): Promise<Search> {
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
    return new Search(response, this.#actions, true);
  }

  get filters(): string[] {
    return this.header?.chips?.as(ChipCloudChip).map((chip) => chip.text) || [];
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get did_you_mean(): DidYouMean | undefined {
    return this.#page.contents_memo?.getType(DidYouMean)[0];
  }

  get showing_results_for(): ShowingResultsFor | undefined {
    return this.#page.contents_memo?.getType(ShowingResultsFor)[0];
  }

  get message(): Message | undefined {
    return this.#page.contents_memo?.getType(Message)[0];
  }

  get songs(): MusicShelf | undefined {
    return this.contents?.filterType(MusicShelf).find((section) => section.title.toString() === 'Songs');
  }

  get videos(): MusicShelf | undefined {
    return this.contents?.filterType(MusicShelf).find((section) => section.title.toString() === 'Videos');
  }

  get albums(): MusicShelf | undefined {
    return this.contents?.filterType(MusicShelf).find((section) => section.title.toString() === 'Albums');
  }

  get artists(): MusicShelf | undefined {
    return this.contents?.filterType(MusicShelf).find((section) => section.title.toString() === 'Artists');
  }

  get playlists(): MusicShelf | undefined {
    return this.contents?.filterType(MusicShelf).find((section) => section.title.toString() === 'Community playlists');
  }

  get page(): ISearchResponse {
    return this.#page;
  }
}

export class SearchContinuation {
  readonly #actions: Actions;
  readonly #page: ISearchResponse;
  public header?: MusicHeader;
  public contents?: MusicShelfContinuation;

  constructor(actions: Actions, response: ApiResponse) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<ISearchResponse>(response.data);
    this.header = this.#page.header?.item().as(MusicHeader);
    this.contents = this.#page.continuation_contents?.as(MusicShelfContinuation);
  }

  async getContinuation(): Promise<SearchContinuation> {
    if (!this.contents?.continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/search', {
      continuation: this.contents.continuation,
      client: 'YTMUSIC'
    });

    return new SearchContinuation(this.#actions, response);
  }

  get has_continuation(): boolean {
    return !!this.contents?.continuation;
  }

  get page(): ISearchResponse {
    return this.#page;
  }
}