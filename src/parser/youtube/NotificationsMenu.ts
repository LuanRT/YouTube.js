import Parser, { ParsedResponse } from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';

import ContinuationItem from '../classes/ContinuationItem.js';
import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader.js';
import Notification from '../classes/Notification.js';

import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';

class NotificationsMenu {
  #page: ParsedResponse;
  #actions: Actions;

  header: SimpleMenuHeader;
  contents: Notification[];

  constructor(actions: Actions, response: ApiResponse) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response.data);

    this.header = this.#page.actions_memo.getType(SimpleMenuHeader)?.[0];
    this.contents = this.#page.actions_memo.getType(Notification);
  }

  async getContinuation(): Promise<NotificationsMenu> {
    const continuation = this.#page.actions_memo.getType(ContinuationItem)?.[0];

    if (!continuation)
      throw new InnertubeError('Continuation not found');

    const response = await continuation.endpoint.call(this.#actions, { parse: false });

    return new NotificationsMenu(this.#actions, response);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default NotificationsMenu;