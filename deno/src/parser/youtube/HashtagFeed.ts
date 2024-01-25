import { InnertubeError } from '../../utils/Utils.ts';
import FilterableFeed from '../../core/mixins/FilterableFeed.ts';
import HashtagHeader from '../classes/HashtagHeader.ts';
import RichGrid from '../classes/RichGrid.ts';
import PageHeader from '../classes/PageHeader.ts';
import Tab from '../classes/Tab.ts';

import type { Actions, ApiResponse } from '../../core/index.ts';
import type { IBrowseResponse } from '../index.ts';
import type ChipCloudChip from '../classes/ChipCloudChip.ts';

export default class HashtagFeed extends FilterableFeed<IBrowseResponse> {
  header?: HashtagHeader | PageHeader;
  contents: RichGrid;

  constructor(actions: Actions, response: IBrowseResponse | ApiResponse) {
    super(actions, response);

    if (!this.page.contents_memo)
      throw new InnertubeError('Unexpected response', this.page);

    const tab = this.page.contents_memo.getType(Tab).first();

    if (!tab.content)
      throw new InnertubeError('Content tab has no content', tab);

    if (this.page.header) {
      this.header = this.page.header.item().as(HashtagHeader, PageHeader);
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