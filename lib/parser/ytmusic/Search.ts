import Parser, { ParsedResponse } from '../index';
import { InnertubeError } from '../../utils/Utils';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import DidYouMean from '../classes/DidYouMean';
import ShowingResultsFor from '../classes/ShowingResultsFor';
import MusicShelf from '../classes/MusicShelf';
import Shelf from '../classes/Shelf';
import RichShelf from '../classes/RichShelf';
import ReelShelf from '../classes/ReelShelf';
import ChipCloudChip from '../classes/ChipCloudChip';

/** @namespace */
class Search {
  #page;
  #actions;
  #continuation;
  #header;
  did_you_mean;
  showing_results_for;
  results;
  sections;
  constructor(response: AxioslikeResponse | ParsedResponse, actions: Actions, args: {
        is_continuation?: boolean,
        is_filtered?: boolean
    } = {}) {
    this.#actions = actions;
    this.#page = args.is_continuation ?
            response as ParsedResponse :
      Parser.parseResponse((response as AxioslikeResponse).data);
    const tab = this.#page.contents.item().key('tabs').parsed().array().get({ selected: true });
    const shelves = tab?.key('content').parsed().item().key('contents').parsed().array();
    const item_section = shelves?.get({ type: 'ItemSection' });
    this.#header = tab?.key('content').parsed().item().key('header').parsed().item();
    this.did_you_mean = item_section?.key('contents').parsed().array().firstOfType(DidYouMean);
    this.showing_results_for = item_section?.key('contents').parsed().array().firstOfType(ShowingResultsFor);
    (!!this.did_you_mean || !!this.showing_results_for) && shelves?.shift();
    if (args.is_continuation || args.is_filtered) {
      const shelf = shelves?.firstOfType(MusicShelf);
      this.results = shelf?.contents;
      this.#continuation = shelf?.continuation;
      return;
    }
    this.sections = shelves?.as<MusicShelf | Shelf | RichShelf | ReelShelf>([ MusicShelf, Shelf, RichShelf, ReelShelf ])?.map((shelf) => ({
      title: shelf.title.toString(),
      contents: shelf.key('contents').parsed().array(),
      getMore: () => this.#getMore(shelf)
    })) || [];
  }
  async #getMore(shelf: MusicShelf | Shelf | RichShelf | ReelShelf) {
    if (!shelf.endpoint)
      throw new InnertubeError(`${shelf.title} doesn't have more items`);
    const response = await shelf.endpoint.call(this.#actions, 'YTMUSIC', true);
    if (!response)
      throw new InnertubeError('Endpoint did not return any data');
    return new Search(response, this.#actions, { is_continuation: true });
  }
  /**
   * Retrieves continuation, only works for individual sections or filtered results.
   *
   * @returns {Promise.<Search>}
   */
  async getContinuation() {
    if (!this.#continuation)
      throw new InnertubeError('Looks like you\'ve reached the end');
    const response = await this.#actions.search({ ctoken: this.#continuation, client: 'YTMUSIC' });
    const data = response.data.continuationContents.musicShelfContinuation;
    this.results = Parser.parse(data.contents);
    this.#continuation = data?.continuations?.[0]?.nextContinuationData?.continuation;
    return this;
  }
  /**
   * Applies given filter to the search.
   *
   * @param name
   * @returns {Promise.<Search>}
   */
  async selectFilter(name: string) {
    if (!this.filters?.includes(name))
      throw new InnertubeError('Invalid filter', { available_filters: this.filters });
    // TODO: make sure this is a ChipCloudChip or use the property accessor helpers on YTNode
    const filter = this.#header?.key('chips').parsed().array().as(ChipCloudChip).get({ text: name });
    if (filter?.is_selected)
      return this;
    const response = await filter?.endpoint?.call(this.#actions, 'YTMUSIC', true);
    if (!response)
      throw new InnertubeError('Endpoint did not return any data');
    return new Search(response, this.#actions, { is_continuation: true });
  }
  /** @type {boolean} */
  get has_continuation() {
    return !!this.#continuation;
  }
  /** @type {string[]} */
  get filters() {
    return this.#header?.key('chips').parsed().array().as(ChipCloudChip).map((chip) => chip.text);
  }
  get songs() {
    return this.sections?.find((section) => section.title === 'Songs');
  }
  get videos() {
    return this.sections?.find((section) => section.title === 'Videos');
  }
  get albums() {
    return this.sections?.find((section) => section.title === 'Albums');
  }
  get artists() {
    return this.sections?.find((section) => section.title === 'Artists');
  }
  get playlists() {
    return this.sections?.find((section) => section.title === 'Playlists');
  }
  get page() {
    return this.#page;
  }
}
export default Search;
