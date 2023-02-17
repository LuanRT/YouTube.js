import type Actions from '../../core/Actions.ts';
import FilterableFeed from '../../core/FilterableFeed.ts';
import ChipCloudChip from '../classes/ChipCloudChip.ts';
import FeedTabbedHeader from '../classes/FeedTabbedHeader.ts';
import RichGrid from '../classes/RichGrid.ts';

import type { IBrowseResponse } from '../types/ParsedResponse.ts';
import type { AppendContinuationItemsAction, ReloadContinuationItemsCommand } from '../index.ts';
import type { ApiResponse } from '../../core/Actions.ts';

export default class HomeFeed extends FilterableFeed<IBrowseResponse> {
  contents: RichGrid | AppendContinuationItemsAction | ReloadContinuationItemsCommand;
  header: FeedTabbedHeader;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = this.memo.getType(FeedTabbedHeader).first();
    this.contents = this.memo.getType(RichGrid).first() || this.page.on_response_received_actions.first();
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
    feed.page.header_memo?.set(this.header.type, [ this.header ]);

    return new HomeFeed(this.actions, feed.page, true);
  }
}