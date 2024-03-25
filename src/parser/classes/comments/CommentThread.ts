import { Parser } from '../../index.js';
import Button from '../Button.js';
import ContinuationItem from '../ContinuationItem.js';
import Comment from './Comment.js';
import CommentView from './CommentView.js';
import CommentReplies from './CommentReplies.js';

import { InnertubeError } from '../../../utils/Utils.js';
import { observe, YTNode } from '../../helpers.js';

import type Actions from '../../../core/Actions.js';
import type { ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class CommentThread extends YTNode {
  static type = 'CommentThread';

  #actions?: Actions;
  #continuation?: ContinuationItem;

  comment: Comment | CommentView | null;
  replies?: ObservedArray<Comment | CommentView>;
  comment_replies_data: CommentReplies | null;
  is_moderated_elq_comment: boolean;
  has_replies: boolean;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'commentViewModel')) {
      this.comment = Parser.parseItem(data.commentViewModel, CommentView);
    } else {
      this.comment = Parser.parseItem(data.comment, Comment);
    }
    this.comment_replies_data = Parser.parseItem(data.replies, CommentReplies);
    this.is_moderated_elq_comment = data.isModeratedElqComment;
    this.has_replies = !!this.comment_replies_data;
  }

  /**
   * Retrieves replies to this comment thread.
   */
  async getReplies(): Promise<CommentThread> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this thread.');

    if (!this.comment_replies_data)
      throw new InnertubeError('This comment has no replies.', this);

    const continuation = this.comment_replies_data.contents?.firstOfType(ContinuationItem);

    if (!continuation)
      throw new InnertubeError('Replies continuation not found.');

    const response = await continuation.endpoint.call(this.#actions, { parse: true });

    if (!response.on_response_received_endpoints_memo)
      throw new InnertubeError('Unexpected response.', response);

    this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment, CommentView).map((comment) => {
      comment.setActions(this.#actions);
      return comment;
    }));

    this.#continuation = response?.on_response_received_endpoints_memo.getType(ContinuationItem).first();

    return this;
  }

  /**
   * Retrieves next batch of replies.
   */
  async getContinuation(): Promise<CommentThread> {
    if (!this.replies)
      throw new InnertubeError('Cannot retrieve continuation because this thread\'s replies have not been loaded.');

    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this thread.');

    const load_more_button = this.#continuation.button?.as(Button);

    if (!load_more_button)
      throw new InnertubeError('"Load more" button not found.');

    const response = await load_more_button.endpoint.call(this.#actions, { parse: true });

    if (!response.on_response_received_endpoints_memo)
      throw new InnertubeError('Unexpected response.', response);

    this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment).map((comment) => {
      comment.setActions(this.#actions);
      return comment;
    }));

    this.#continuation = response.on_response_received_endpoints_memo.getType(ContinuationItem).first();

    return this;
  }

  get has_continuation(): boolean {
    if (!this.replies)
      throw new InnertubeError('Cannot determine if there is a continuation because this thread\'s replies have not been loaded.');
    return !!this.#continuation;
  }

  setActions(actions: Actions) {
    this.#actions = actions;
  }
}