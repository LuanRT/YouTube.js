import Parser from '../../index.ts';
import Comment from './Comment.ts';
import ContinuationItem from '../ContinuationItem.ts';
import CommentReplies from './CommentReplies.ts';
import Button from '../Button.ts';
import type Actions from '../../../core/Actions.ts';
import type { ObservedArray } from '../../helpers.ts';
import { InnertubeError } from '../../../utils/Utils.ts';
import { observe, YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class CommentThread extends YTNode {
  static type = 'CommentThread';

  #actions?: Actions;
  #continuation?: ContinuationItem;

  comment: Comment | null;
  replies?: ObservedArray<Comment>;
  comment_replies_data: CommentReplies | null;
  is_moderated_elq_comment: boolean;
  has_replies: boolean;

  constructor(data: RawNode) {
    super();
    this.comment = Parser.parseItem<Comment>(data.comment, Comment);
    this.comment_replies_data = Parser.parseItem<CommentReplies>(data.replies);
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
      throw new InnertubeError('This comment has no replies.', { comment_id: this.comment?.comment_id });

    const continuation = this.comment_replies_data.contents?.firstOfType(ContinuationItem);

    if (!continuation)
      throw new InnertubeError('Replies continuation not found.');

    const response = await continuation.endpoint.call(this.#actions, { parse: true });

    if (!response.on_response_received_endpoints_memo)
      throw new InnertubeError('Unexpected response.', response);

    this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment).map((comment) => {
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

    this.#continuation = response.on_response_received_endpoints_memo.getType(ContinuationItem)?.[0];

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

export default CommentThread;