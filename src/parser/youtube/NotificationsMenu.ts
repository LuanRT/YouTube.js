import Parser from '..';
import Actions, { ApiResponse } from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';

import Notification from '../classes/Notification';
import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader';
import ContinuationItem from '../classes/ContinuationItem';

class NotificationsMenu {
  #page;
  #actions;

  header;
  contents;

  constructor(actions: Actions, response: ApiResponse) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response.data);

    this.header = this.#page.actions_memo.get('SimpleMenuHeader')?.[0]?.as(SimpleMenuHeader) || null;
    this.contents = this.#page.actions_memo.get('Notification') as Notification[];
  }

  async getContinuation(): Promise<NotificationsMenu> {
    const continuation = this.#page.actions_memo.get('ContinuationItem')?.[0].as(ContinuationItem);

    if (!continuation)
      throw new InnertubeError('Continuation not found');

    const response = await continuation.endpoint.call(this.#actions, { parse: false });
    return new NotificationsMenu(this.#actions, response);
  }
}

export default NotificationsMenu;