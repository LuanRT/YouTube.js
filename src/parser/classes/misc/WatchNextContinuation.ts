import { InnertubeError } from '../../../utils/Utils.js';
import { type ObservedArray, observe, type YTNode } from '../../helpers.js';
import AppendContinuationItemsAction from '../actions/AppendContinuationItemsAction.js';
import ContinuationItem from '../ContinuationItem.js';

import type { Actions } from '../../../core/index.js';
import type { INextResponse } from '../../types/index.js';

export default class WatchNextContinuation {
  public contents: ObservedArray<YTNode>;

  readonly #actions: Actions;
  readonly #continuation?: ContinuationItem;

  constructor(actions: Actions, data: INextResponse) {
    this.#actions = actions;

    const append_continuation_items_action = data.on_response_received_endpoints?.firstOfType(AppendContinuationItemsAction);

    if (!append_continuation_items_action)
      throw new InnertubeError('AppendContinuationItemsAction not found', data);

    const items: YTNode[] = [];

    for (const item of append_continuation_items_action.contents) {
      if (item.is(ContinuationItem)) {
        this.#continuation = item;
      } else {
        items.push(item);
      }
    }

    this.contents = observe(items);
  }

  /**
   * Indicates whether there are more items that can be fetched.
   */
  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  /**
   * Retrieves the next batch of items.
   */
  public async getContinuation(): Promise<WatchNextContinuation> {
    if (!this.#continuation)
      throw new InnertubeError('No continuation item found');

    const response = await this.#continuation.endpoint.call(this.#actions, { parse: true });

    return new WatchNextContinuation(this.#actions, response);
  }
}
