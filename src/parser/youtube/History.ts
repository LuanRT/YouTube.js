import type Actions from '../../core/Actions.js';
import Feed from '../../core/Feed.js';
import ItemSection from '../classes/ItemSection.js';
import BrowseFeedActions from '../classes/BrowseFeedActions.js';

// TODO: make feed actions usable
class History extends Feed {
  sections: ItemSection[];
  feed_actions: BrowseFeedActions;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);
    this.sections = this.memo.getType(ItemSection);
    this.feed_actions = this.memo.getType(BrowseFeedActions)?.[0];
  }

  /**
   * Retrieves next batch of contents.
   */
  async getContinuation(): Promise<History> {
    const continuation = await this.getContinuationData();
    return new History(this.actions, continuation, true);
  }
}

export default History;