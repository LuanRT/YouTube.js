import Actions from '../../core/Actions';
import FilterableFeed from '../../core/FilterableFeed';
import ChipCloudChip from '../classes/ChipCloudChip';
import FeedTabbedHeader from '../classes/FeedTabbedHeader';
import RichGrid from '../classes/RichGrid';

import { ReloadContinuationItemsCommand, AppendContinuationItemsAction } from '..';

export default class HomeFeed extends FilterableFeed {
  contents: RichGrid | AppendContinuationItemsAction | ReloadContinuationItemsCommand;
  header: FeedTabbedHeader;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = this.memo.getType<FeedTabbedHeader>(FeedTabbedHeader)?.[0];
    this.contents =
      this.memo.getType<RichGrid>(RichGrid)?.[0] ||
      this.page.on_response_received_actions?.[0];
  }

  /**
   * Applies given filter to the feed.
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
    feed.page.header_memo.set(this.header.type, [ this.header ]);

    return new HomeFeed(this.actions, feed.page, true);
  }
}