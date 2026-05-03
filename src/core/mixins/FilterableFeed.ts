import Feed from './Feed.js';
import ChipCloudChip from '../../parser/classes/ChipCloudChip.js';
import FeedFilterChipBar from '../../parser/classes/FeedFilterChipBar.js';
import ChipView from '../../parser/classes/ChipView.js';
import ShowSheetCommand from '../../parser/classes/commands/ShowSheetCommand.js';
import SheetView from '../../parser/classes/SheetView.js';
import ListView from '../../parser/classes/ListView.js';
import ListItemView from '../../parser/classes/ListItemView.js';
import type NavigationEndpoint from '../../parser/classes/NavigationEndpoint.js';

import { observe, type ObservedArray } from '../../parser/helpers.js';
import type { IParsedResponse } from '../../parser/index.js';
import type { ApiResponse, Actions } from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';

export interface FilterNodes {
  primary_filters?: ObservedArray<ChipCloudChip | ListItemView | ChipView>;
  secondary_filters?: ObservedArray<ChipView>;
}

export default class FilterableFeed<T extends IParsedResponse> extends Feed<T> {
  #filter_nodes?: FilterNodes;

  constructor(actions: Actions, data: ApiResponse | T, already_parsed = false) {
    super(actions, data, already_parsed);
  }

  /**
   * Returns the InnerTube renderer nodes representing filters. 
   */
  get filter_nodes(): FilterNodes {
    if (this.#filter_nodes)
      return this.#filter_nodes;

    let primary_filters: ObservedArray<ChipCloudChip | ListItemView | ChipView> | undefined;
    let secondary_filters: ObservedArray<ChipView> | undefined;

    if (this.memo.getType(FeedFilterChipBar)?.length > 1)
      throw new InnertubeError('There are too many feed filter chipbars, you\'ll need to find the correct one yourself in this.page');

    if (this.memo.has('FeedFilterChipBar')) {
      primary_filters = this.memo.getType(ChipCloudChip);;
    } else if (this.memo.has('ChipView')) {
      const chips = this.memo.getType(ChipView);
      const firstChip = chips[0];

      if (firstChip.is(ChipView)) {
        const hasDropdown =
          firstChip.display_type === 'CHIP_VIEW_MODEL_DISPLAY_TYPE_DROP_DOWN' ||
          firstChip.display_type === 'CHIP_VIEW_MODEL_DISPLAY_TYPE_DROP_DOWN_WITH_CLEAR';

        if (hasDropdown) {
          const tapCommand = firstChip.tap_command?.command;
          if (
            tapCommand?.is(ShowSheetCommand) &&
            tapCommand.inline_content?.is(SheetView) &&
            tapCommand.inline_content.content?.is(ListView)
          ) {
            primary_filters = tapCommand.inline_content.content.items.as(ListItemView);
          }

          secondary_filters = observe(chips.slice(1));
        } else primary_filters = chips;
      }
    }

    this.#filter_nodes = {
      primary_filters,
      secondary_filters
    };

    return this.#filter_nodes;
  }

  /**
   * Returns the available primary filters as strings.
   */
  get filters(): string[] {
    return this.filter_nodes?.primary_filters?.map((chip) => {
      if (chip.is(ChipView) || chip.is(ChipCloudChip)) {
        return chip.text?.toString() || '';
      } else if (chip.is(ListItemView)) {
        return chip.title?.toString() || '';
      }
      return '';
    }) || [];
  }

  /**
   * Returns the available secondary filters as strings.
   */
  get secondary_filters(): string[] {
    return this.filter_nodes?.secondary_filters?.map((chip) => chip.text?.toString() || '') || [];
  }

  /**
   * Applies given filter and returns a new {@link Feed} object.
   */
  async getFilteredFeed(filter: string | ChipCloudChip | ChipView | ListItemView, secondaryFilter?: string | ChipView): Promise<Feed<T>> {
    let filterEndpoint: NavigationEndpoint | undefined;
    let isSelected: boolean = false;

    if (typeof filter === 'string') {
      if (!this.filters.includes(filter))
        throw new InnertubeError(`Filter '${filter}' not found`, { available_filters: this.filters });

      for (const primaryFilterNode of this.filter_nodes.primary_filters || []) {
        if ((primaryFilterNode.is(ChipView) || primaryFilterNode.is(ChipCloudChip)) && primaryFilterNode.text?.toString() === filter) {
          filterEndpoint = primaryFilterNode.is(ChipView) ? primaryFilterNode.tap_command : primaryFilterNode.endpoint;
          isSelected = primaryFilterNode.is(ChipView) ? primaryFilterNode.selected : primaryFilterNode.is_selected;
        } else if (primaryFilterNode.is(ListItemView) && primaryFilterNode.title?.toString() === filter) {
          filterEndpoint = primaryFilterNode?.renderer_context?.command_context?.on_tap;
          isSelected = primaryFilterNode.is_selected;
        }
      }
    } else if ([ 'ChipCloudChip', 'ChipView', 'ListItemView' ].includes(filter.type)) {
      if (filter.is(ChipView)) {
        filterEndpoint = filter.tap_command;
      } else if (filter.is(ChipCloudChip)) {
        filterEndpoint = filter.endpoint;
      } else if (filter.is(ListItemView)) {
        filterEndpoint = filter?.renderer_context?.command_context?.on_tap;
      }
      isSelected = filter.is(ChipView) ? filter.selected : filter.is_selected;
    } else {
      throw new InnertubeError('Invalid primary filter type');
    }

    if (!filterEndpoint)
      throw new InnertubeError('Could not find endpoint for the specified filter');

    if (isSelected && !secondaryFilter)
      return this;

    // No need to make a request if the filter is already selected...
    let response = isSelected ? this.page : await filterEndpoint.call(this.actions, { parse: true });

    if (secondaryFilter) {
      const feed = new FilterableFeed(this.actions, response, true);

      let secondaryFilterNode: ChipView | undefined;

      if (typeof secondaryFilter === 'string') {
        if (!feed.secondary_filters.includes(secondaryFilter))
          throw new InnertubeError(`Secondary filter '${secondaryFilter}' not found`, { available_filters: feed.secondary_filters });
        secondaryFilterNode = feed.filter_nodes.secondary_filters?.find((chip) => chip.text?.toString() === secondaryFilter);
      } else if (secondaryFilter.is(ChipView)) {
        secondaryFilterNode = secondaryFilter;
      } else {
        throw new InnertubeError('Invalid secondary filter type');
      }

      if (secondaryFilterNode && !secondaryFilterNode.selected) {
        const secondaryFilterEndpoint = secondaryFilterNode?.tap_command || secondaryFilterNode?.endpoint;

        if (!secondaryFilterEndpoint)
          throw new InnertubeError('Could not find an endpoint for the specified secondary filter');

        response = await secondaryFilterEndpoint.call(this.actions, { parse: true });
      }
    }

    if (!response)
      throw new InnertubeError('Failed to fetch data for the specified filter');

    return new Feed(this.actions, response, true);
  }
}