import { InnertubeError } from '../../../utils/Utils.js';
import { type ObservedArray, observe } from '../../helpers.js';
import AppendContinuationItemsAction from '../actions/AppendContinuationItemsAction.js';
import CommentThread from '../comments/CommentThread.js';
import ContinuationItem from '../ContinuationItem.js';

import type { Actions } from '../../../core/index.js';
import type { INextResponse } from '../../types/index.js';

export default class CommentsContinuation {
  public replies: ObservedArray<CommentThread> = observe([]);

  readonly #actions: Actions;
  readonly #nextContinuationItem?: ContinuationItem;

  constructor(actions: Actions, data: INextResponse) {
    this.#actions = actions;

    if (!data.on_response_received_endpoints || !data.on_response_received_endpoints_memo) {
      throw new InnertubeError('Invalid response received for comments continuation', data);
    }

    const appendContinuationItemsNode = data.on_response_received_endpoints.firstOfType(AppendContinuationItemsAction);

    if (appendContinuationItemsNode) {
      for (const item of appendContinuationItemsNode.contents) {
        if (item.is(CommentThread)) {
          item.setActions(this.#actions);
          item.processRepliesData();
          this.replies.push(item);
        } else if (item.is(ContinuationItem)) {
          this.#nextContinuationItem = item;
        }
      }
    }
  }

  /**
   * Indicates whether this comment thread has more replies that can be fetched.
   */
  get has_continuation(): boolean {
    return !!this.#nextContinuationItem;
  }

  /**
   * Retrieves next batch of replies.
   */
  public async getContinuation(): Promise<CommentsContinuation> {
    if (!this.#nextContinuationItem)
      throw new InnertubeError('No continuation item found');

    const loadMoreButton = this.#nextContinuationItem.button;

    if (!loadMoreButton)
      throw new InnertubeError('"Load more" button not found in continuation item');

    const response = await loadMoreButton.endpoint.call(this.#actions, { parse: true });

    return new CommentsContinuation(this.#actions, response);
  }
}