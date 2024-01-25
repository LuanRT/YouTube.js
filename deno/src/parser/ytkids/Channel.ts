import Feed from '../../core/mixins/Feed.ts';
import C4TabbedHeader from '../classes/C4TabbedHeader.ts';
import ItemSection from '../classes/ItemSection.ts';
import { ItemSectionContinuation } from '../index.ts';

import type { IBrowseResponse } from '../types/index.ts';
import type { ApiResponse, Actions } from '../../core/index.ts';

class Channel extends Feed<IBrowseResponse> {
  header?: C4TabbedHeader;
  contents?: ItemSection | ItemSectionContinuation;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
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

    return new Channel(this.actions, response);
  }

  get has_continuation(): boolean {
    return !!this.contents?.continuation;
  }
}

export default Channel;