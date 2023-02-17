import Parser from '../index.ts';

import ContinuationItem from '../classes/ContinuationItem.ts';
import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader.ts';
import Notification from '../classes/Notification.ts';

import type Actions from '../../core/Actions.ts';
import type { ApiResponse } from '../../core/Actions.ts';
import type { IGetNotificationsMenuResponse } from '../types/ParsedResponse.ts';
import { InnertubeError } from '../../utils/Utils.ts';

class NotificationsMenu {
  #page: IGetNotificationsMenuResponse;
  #actions: Actions;

  header: SimpleMenuHeader;
  contents: Notification[];

  constructor(actions: Actions, response: ApiResponse) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IGetNotificationsMenuResponse>(response.data);

    this.header = this.#page.actions_memo.getType(SimpleMenuHeader).first();
    this.contents = this.#page.actions_memo.getType(Notification);
  }

  async getContinuation(): Promise<NotificationsMenu> {
    const continuation = this.#page.actions_memo.getType(ContinuationItem).first();

    if (!continuation)
      throw new InnertubeError('Continuation not found');

    const response = await continuation.endpoint.call(this.#actions, { parse: false });

    return new NotificationsMenu(this.#actions, response);
  }

  get page(): IGetNotificationsMenuResponse {
    return this.#page;
  }
}

export default NotificationsMenu;