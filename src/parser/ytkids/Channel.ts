import Feed from '../../core/Feed.js';
import Actions from '../../core/Actions.js';
import C4TabbedHeader from '../classes/C4TabbedHeader.js';
import ItemSection from '../classes/ItemSection.js';
import { ItemSectionContinuation } from '../index.js';

class Channel extends Feed {
  header?: C4TabbedHeader;
  contents?: ItemSection | ItemSectionContinuation;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = this.page.header?.item().as(C4TabbedHeader);
    this.contents = this.memo.getType(ItemSection).first() || this.page.continuation_contents?.as(ItemSectionContinuation);
  }

  /**
   * Retrieves next batch of videos.
   */
  async getContinuation(): Promise<Channel> {
    const response = await this.actions.execute('/browse', {
      continuation: this.contents?.continuation,
      client: 'YTKIDS'
    });

    return new Channel(this.actions, response.data);
  }

  get has_continuation(): boolean {
    return !!this.contents?.continuation;
  }
}

export default Channel;