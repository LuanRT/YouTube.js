import ChipCloudChip from '../parser/classes/ChipCloudChip.js';
import FeedFilterChipBar from '../parser/classes/FeedFilterChipBar.js';
import Feed from './Feed.js';

import type { ObservedArray } from '../parser/helpers.js';
import { InnertubeError } from '../utils/Utils.js';
import type Actions from './Actions.js';

class FilterableFeed extends Feed {
  #chips?: ObservedArray<ChipCloudChip>;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);
  }

  /**
   * Returns the filter chips.
   */
  get filter_chips(): ObservedArray<ChipCloudChip> {
    if (this.#chips)
      return this.#chips || [];

    if (this.memo.getType(FeedFilterChipBar)?.length > 1)
      throw new InnertubeError('There are too many feed filter chipbars, you\'ll need to find the correct one yourself in this.page');

    if (this.memo.getType(FeedFilterChipBar)?.length === 0)
      throw new InnertubeError('There are no feed filter chipbars');

    this.#chips = this.memo.getType(ChipCloudChip);

    return this.#chips || [];
  }

  /**
   * Returns available filters.
   */
  get filters(): string[] {
    return this.filter_chips.map((chip) => chip.text.toString()) || [];
  }

  /**
   * Applies given filter and returns a new {@link Feed} object.
   */
  async getFilteredFeed(filter: string | ChipCloudChip): Promise<Feed> {
    let target_filter: ChipCloudChip | undefined;

    if (typeof filter === 'string') {
      if (!this.filters.includes(filter))
        throw new InnertubeError('Filter not found', { available_filters: this.filters });
      target_filter = this.filter_chips.find((chip) => chip.text.toString() === filter);
    } else if (filter.type === 'ChipCloudChip') {
      target_filter = filter;
    } else {
      throw new InnertubeError('Invalid filter');
    }

    if (!target_filter)
      throw new InnertubeError('Filter not found');

    if (target_filter.is_selected)
      return this;

    const response = await target_filter.endpoint?.call(this.actions, { parse: true });

    return new Feed(this.actions, response, true);
  }
}

export default FilterableFeed;