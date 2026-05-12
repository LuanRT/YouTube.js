import Feed from '../../core/mixins/Feed.js';
import { InnertubeError } from '../../utils/Utils.js';
import ItemSection from '../classes/ItemSection.js';
import SearchHeader from '../classes/SearchHeader.js';
import SearchSubMenu from '../classes/SearchSubMenu.js';
import SectionList from '../classes/SectionList.js';
import UniversalWatchCard from '../classes/UniversalWatchCard.js';
import AppendContinuationItemsAction from '../classes/actions/AppendContinuationItemsAction.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import { ReloadContinuationItemsCommand } from '../continuations.js';

import { observe } from '../helpers.js';
import type { ApiResponse, Actions } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { ISearchResponse } from '../types/index.js';

export default class Search extends Feed<ISearchResponse> {
  public header?: SearchHeader;
  public results: ObservedArray<YTNode>;
  public refinements: string[];
  public estimated_results: number;
  public sub_menu?: SearchSubMenu;
  public watch_card?: UniversalWatchCard;

  constructor(actions: Actions, data: ApiResponse | ISearchResponse, already_parsed = false) {
    super(actions, data, already_parsed);

    const contents =
      this.page.contents_memo?.getType(SectionList)[0].contents ||
      this.page.on_response_received_commands_memo?.getType(SectionList)[0]?.contents ||
      this.page.on_response_received_commands?.[0].as(AppendContinuationItemsAction, ReloadContinuationItemsCommand).contents;

    if (!contents)
      throw new InnertubeError('No contents found in search response');

    if (this.page.on_response_received_commands && !this.page.header) {
      const headerSlot = this.page.on_response_received_commands.as(ReloadContinuationItemsCommand).find(
        (command) => command.is(ReloadContinuationItemsCommand) && command.slot === 'RELOAD_CONTINUATION_SLOT_HEADER'
      );
      this.header = headerSlot?.contents?.firstOfType(SearchHeader);
    } else {
      this.header = this.page.header?.item().as(SearchHeader);
    }

    this.results = observe(contents.filterType(ItemSection).flatMap((section) => section.contents));
    this.refinements = this.page.refinements || [];
    this.estimated_results = this.page.estimated_results || 0;

    if (this.page.contents_memo) {
      this.sub_menu = this.page.contents_memo.getType(SearchSubMenu)[0];
      this.watch_card = this.page.contents_memo.getType(UniversalWatchCard)[0];
    }
  }

  /**
   * Applies a refinement filter to the search results.
   * 
   * Use {@link Search.refinement_filters} to get a list of available refinements.
   *
   * @example
   * ```ts
   * const results = await yt.search('PilotRedSun');
   * // Narrow down to only YouTube Shorts
   * const shortsOnly = await results.applyRefinement('Shorts');
   * ```
   * @param refinementFilter - The text label of the chip or the {@link ChipCloudChip} node itself.
   */
  async applyRefinement(refinementFilter: string | ChipCloudChip): Promise<Search> {
    let endpoint: NavigationEndpoint | undefined;

    if (typeof refinementFilter === 'string') {
      const chipBar = this.header?.chip_bar;
      if (!chipBar) throw new InnertubeError('No chip bar found in search header');

      const targetChip = chipBar.chips.find((chip) => chip.text === refinementFilter);
      if (!targetChip) throw new InnertubeError(`Refinement filter "${refinementFilter}" not found`, { available_filters: this.refinement_filters });

      endpoint = targetChip.endpoint;

      if (!endpoint && targetChip.is_selected) return this; // The 'All' filter doesn't have an endpoint when it's selected.
    } else if (refinementFilter.is(ChipCloudChip)) {
      if (!refinementFilter.endpoint && refinementFilter.is_selected) return this;
      endpoint = refinementFilter.endpoint;
    } else {
      throw new InnertubeError('Invalid filter type');
    }

    if (!endpoint)
      throw new InnertubeError('Could not find endpoint for the specified filter');

    const page = await endpoint.call<ISearchResponse>(this.actions, { parse: true });

    return new Search(this.actions, page, true);
  }

  /**
   * Returns a list of available refinement filters. Use {@link Search.applyRefinement} to apply a filter.
   */
  get refinement_filters(): string[] {
    return this.header?.chip_bar?.chips.map((chip) => chip.text) || [];
  }

  /**
   * Retrieves next batch of search results.
   */
  async getContinuation(): Promise<Search> {
    const response = await this.getContinuationData();
    if (!response)
      throw new InnertubeError('Could not get continuation data');
    return new Search(this.actions, response, true);
  }
}