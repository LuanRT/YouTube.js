import type Actions from '../../core/Actions';
import type { ApiResponse } from '../../core/Actions';

import Parser, { ParsedResponse } from '../index';
import { InnertubeError } from '../../utils/Utils';

import SectionList from '../classes/SectionList';
import TabbedSearchResults from '../classes/TabbedSearchResults';

import DidYouMean from '../classes/DidYouMean';
import MusicResponsiveListItem from '../classes/MusicResponsiveListItem';
import MusicShelf from '../classes/MusicShelf';
import ShowingResultsFor from '../classes/ShowingResultsFor';

import ChipCloud from '../classes/ChipCloud';
import ChipCloudChip from '../classes/ChipCloudChip';
import ItemSection from '../classes/ItemSection';
import Message from '../classes/Message';

import type { ObservedArray } from '../helpers';

class Search {
  #page: ParsedResponse;
  #actions: Actions;
  #continuation?: string | null;

  header?: ChipCloud | null;

  did_you_mean: DidYouMean | null;
  showing_results_for: ShowingResultsFor | null;
  message: Message | null;

  results?: ObservedArray<MusicResponsiveListItem>;
  sections?: ObservedArray<MusicShelf>;

  constructor(response: ApiResponse | ParsedResponse, actions: Actions, args: { is_continuation?: boolean, is_filtered?: boolean } = {}) {
    this.#actions = actions;

    this.#page = args.is_continuation ?
      response as ParsedResponse :
      Parser.parseResponse((response as ApiResponse).data);

    const tab = this.#page.contents.item().as(TabbedSearchResults).tabs.get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not find target tab.');

    const tab_content = tab.content?.as(SectionList);

    if (!tab_content)
      throw new InnertubeError('Target tab did not have any content.');

    this.header = tab_content.hasKey('header') ? tab_content.header?.item().as(ChipCloud) : null;

    const shelves = tab_content.contents.as(MusicShelf, ItemSection);
    const item_section = shelves.firstOfType(ItemSection);

    this.did_you_mean = item_section?.contents?.firstOfType(DidYouMean) || null;
    this.showing_results_for = item_section?.contents?.firstOfType(ShowingResultsFor) || null;
    this.message = item_section?.contents?.firstOfType(Message) || null;

    if (args.is_continuation || args.is_filtered) {
      this.results = shelves.firstOfType(MusicShelf)?.contents;
      this.#continuation = shelves.firstOfType(MusicShelf)?.continuation;
    } else {
      this.sections = shelves.filterType(MusicShelf);
    }
  }

  /**
   * Equivalent to clicking on the shelf to load more items.
   */
  async getMore(shelf: MusicShelf | undefined): Promise<Search> {
    if (!shelf || !shelf.endpoint)
      throw new InnertubeError('Cannot retrieve more items for this shelf because it does not have an endpoint.');

    const response = await shelf.endpoint.call(this.#actions, { parse: true, client: 'YTMUSIC' });

    if (!response)
      throw new InnertubeError('Endpoint did not return any data');

    return new Search(response, this.#actions, { is_continuation: true });
  }

  /**
   * Retrieves continuation, only works for individual sections or filtered results.
   */
  async getContinuation(): Promise<Search> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.execute('/search', {
      continuation: this.#continuation,
      client: 'YTMUSIC'
    });

    const data = response.data.continuationContents.musicShelfContinuation;

    this.results = Parser.parse(data.contents).array().as(MusicResponsiveListItem);
    this.#continuation = data?.continuations?.[0]?.nextContinuationData?.continuation;

    return this;
  }

  /**
   * Applies given filter to the search.
   */
  async selectFilter(target_filter: string | ChipCloudChip): Promise<Search> {
    let cloud_chip: ChipCloudChip | undefined;

    if (typeof target_filter === 'string') {
      cloud_chip = this.header?.chips?.as(ChipCloudChip).get({ text: target_filter });
      if (!cloud_chip)
        throw new InnertubeError('Could not find filter with given name.', { available_filters: this.filters });
    } else if (target_filter?.is(ChipCloudChip)) {
      cloud_chip = target_filter;
    } else {
      throw new InnertubeError('Invalid filter', { available_filters: this.filters });
    }

    if (cloud_chip?.is_selected) return this;

    const response = await cloud_chip?.endpoint?.call(this.#actions, { parse: true, client: 'YTMUSIC' });

    if (!response)
      throw new InnertubeError('Endpoint did not return any data');

    return new Search(response, this.#actions, { is_continuation: true });
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get filters(): string[] {
    return this.header?.chips?.as(ChipCloudChip).map((chip) => chip.text) || [];
  }

  get songs(): MusicShelf | undefined {
    return this.sections?.find((section) => section.title.toString() === 'Songs');
  }

  get videos(): MusicShelf | undefined {
    return this.sections?.find((section) => section.title.toString() === 'Videos');
  }

  get albums(): MusicShelf | undefined {
    return this.sections?.find((section) => section.title.toString() === 'Albums');
  }

  get artists(): MusicShelf | undefined {
    return this.sections?.find((section) => section.title.toString() === 'Artists');
  }

  get playlists(): MusicShelf | undefined {
    return this.sections?.find((section) => section.title.toString() === 'Community playlists');
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Search;