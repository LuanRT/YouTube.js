import FilterableFeed from '../../core/FilterableFeed.js';
import { InnertubeError } from '../../utils/Utils.js';
import HashtagHeader from '../classes/HashtagHeader.js';
import RichGrid from '../classes/RichGrid.js';
import Tab from '../classes/Tab.js';

import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type ChipCloudChip from '../classes/ChipCloudChip.js';
import type { IBrowseResponse } from '../index.js';

export default class HashtagFeed extends FilterableFeed<IBrowseResponse> {
  header?: HashtagHeader;
  contents: RichGrid;

  constructor(actions: Actions, response: IBrowseResponse | ApiResponse) {
    super(actions, response);

    if (!this.page.contents_memo)
      throw new InnertubeError('Unexpected response', this.page);

    const tab = this.page.contents_memo.getType(Tab).first();

    if (!tab.content)
      throw new InnertubeError('Content tab has no content', tab);

    if (this.page.header) {
      this.header = this.page.header.item().as(HashtagHeader);
    }

    this.contents = tab.content.as(RichGrid);
  }

  /**
   * Applies given filter and returns a new {@link HashtagFeed} object. Use {@link HashtagFeed.filters} to get available filters.
   * @param filter - Filter to apply.
   */
  async applyFilter(filter: string | ChipCloudChip): Promise<HashtagFeed> {
    const response = await super.getFilteredFeed(filter);
    return new HashtagFeed(this.actions, response.page);
  }
}