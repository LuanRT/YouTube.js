import Parser, { ParsedResponse } from '..';
import { InnertubeError } from '../../utils/Utils';

import ContinuationItem from '../classes/ContinuationItem';
import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader';
import Notification from '../classes/Notification';

import type Actions from '../../core/Actions';
import type { ApiResponse } from '../../core/Actions';

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