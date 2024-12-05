import Feed from '../../core/mixins/Feed.ts';
import C4TabbedHeader from '../classes/C4TabbedHeader.ts';
import ItemSection from '../classes/ItemSection.ts';
import { ItemSectionContinuation } from '../index.ts';
import NavigationEndpoint from '../classes/NavigationEndpoint.ts';

import type { IBrowseResponse } from '../types/index.ts';
import type { ApiResponse, Actions } from '../../core/index.ts';

export default class Channel extends Feed<IBrowseResponse> {
  public header?: C4TabbedHeader;
  public contents?: ItemSection | ItemSectionContinuation;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = this.page.header?.item().as(C4TabbedHeader);
    this.contents = this.memo.getType(ItemSection).first() || this.page.continuation_contents?.as(ItemSectionContinuation);
  }

  /**
   * Retrieves next batch of content.
   */
  async getContinuation(): Promise<Channel> {
    if (!this.contents)
      throw new Error('No continuation available.');
    
    const continuation_request = new NavigationEndpoint({
      continuationCommand: {
        token: this.contents.continuation,
        request: 'CONTINUATION_REQUEST_TYPE_BROWSE'
      }
    });
    
    const continuation_response = await continuation_request.call(this.actions, { client: 'YTKIDS' });

    return new Channel(this.actions, continuation_response);
  }

  get has_continuation(): boolean {
    return !!this.contents?.continuation;
  }
}