import { Parser } from '../index.ts';
import { InnertubeError } from '../../utils/Utils.ts';

import ContinuationItem from '../classes/ContinuationItem.ts';
import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader.ts';
import Notification from '../classes/Notification.ts';

import type { ApiResponse, Actions } from '../../core/index.ts';
import type { IGetNotificationsMenuResponse } from '../types/index.ts';

export default class NotificationsMenu {
  readonly #page: IGetNotificationsMenuResponse;
  readonly #actions: Actions;

  public header: SimpleMenuHeader;
  public contents: Notification[];

  constructor(actions: Actions, response: ApiResponse) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IGetNotificationsMenuResponse>(response.data);

    if (!this.#page.actions_memo)
      throw new InnertubeError('Page actions not found');

    this.header = this.#page.actions_memo.getType(SimpleMenuHeader)[0];
    this.contents = this.#page.actions_memo.getType(Notification);
  }

  async getContinuation(): Promise<NotificationsMenu> {
    const continuation = this.#page.actions_memo?.getType(ContinuationItem)[0];

    if (!continuation)
      throw new InnertubeError('Continuation not found');

    const response = await continuation.endpoint.call(this.#actions, { parse: false });

    return new NotificationsMenu(this.#actions, response);
  }

  get page(): IGetNotificationsMenuResponse {
    return this.#page;
  }
}