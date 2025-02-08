import FilterableFeed from '../../core/mixins/FilterableFeed.js';
import FeedTabbedHeader from '../classes/FeedTabbedHeader.js';
import RichGrid from '../classes/RichGrid.js';

import type { IBrowseResponse } from '../types/index.js';
import type { AppendContinuationItemsAction, ReloadContinuationItemsCommand } from '../index.js';
import type { ApiResponse, Actions } from '../../core/index.js';
import type ChipCloudChip from '../classes/ChipCloudChip.js';

export default class HomeFeed extends FilterableFeed<IBrowseResponse> {
  public contents?: RichGrid | AppendContinuationItemsAction | ReloadContinuationItemsCommand;
  public header?: FeedTabbedHeader;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = this.memo.getType(FeedTabbedHeader)[0];
    this.contents = this.memo.getType(RichGrid)[0] || this.page.on_response_received_actions?.[0];
  }

  /**
   * Applies given filter to the feed. Use {@link filters} to get available filters.
   * @param filter - Filter to apply.
   */
  async applyFilter(filter: string | ChipCloudChip): Promise<HomeFeed> {
    const feed = await super.getFilteredFeed(filter);
    return new HomeFeed(this.actions, feed.page, true);
  }

  /**
   * Retrieves next batch of contents.
   */
  async getContinuation(): Promise<HomeFeed> {
    const feed = await super.getContinuation();

    // Keep the page header
    feed.page.header = this.page.header;

    if (this.header)
      feed.page.header_memo?.set(this.header.type, [ this.header ]);

    return new HomeFeed(this.actions, feed.page, true);
  }
}