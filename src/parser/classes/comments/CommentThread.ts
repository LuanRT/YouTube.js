
import { Parser } from '../../index.js';
import Button from '../Button.js';
import ContinuationItem from '../ContinuationItem.js';
import CommentView from './CommentView.js';
import CommentReplies from './CommentReplies.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import { InnertubeError, u8ToBase64 } from '../../../utils/Utils.js';
import { observe, YTNode } from '../../helpers.js';
import { GetCommentsSectionParams } from '../../../../protos/generated/misc/params.js';

import type { RawNode } from '../../index.js';
import type Actions from '../../../core/Actions.js';
import type { Memo, ObservedArray } from '../../helpers.js';

export default class CommentThread extends YTNode {
  static type = 'CommentThread';
  
  public comment: CommentView | null;
  public replies?: ObservedArray<CommentView>;
  public comment_replies_data: CommentReplies | null;
  public is_moderated_elq_comment: boolean;
  public has_replies: boolean;
  
  #actions?: Actions;
  #continuation?: ContinuationItem;

  constructor(data: RawNode) {
    super();
    this.comment = Parser.parseItem(data.commentViewModel, CommentView);
    this.comment_replies_data = Parser.parseItem(data.replies, CommentReplies);
    this.is_moderated_elq_comment = data.isModeratedElqComment;
    this.has_replies = !!this.comment_replies_data;
  }

  get has_continuation(): boolean {
    if (!this.replies)
      throw new InnertubeError('Cannot determine if there is a continuation because this thread\'s replies have not been loaded.');
    return !!this.#continuation;
  }

  /**
   * Retrieves replies to this comment thread.
   */
  async getReplies(videoId?: string): Promise<CommentThread> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this thread.');

    if (!this.comment_replies_data)
      throw new InnertubeError('This comment has no replies.', this);

    let response;

    const continuation = this.comment_replies_data.contents?.firstOfType(ContinuationItem);

    if (continuation) {
      response = await continuation.endpoint.call(this.#actions, { parse: true });
    } else {
      const effectiveVideoId = videoId || (this as any).__videoId;
      if (!effectiveVideoId)
        throw new InnertubeError('Cannot retrieve replies: videoId is required when no continuation token is available.');

      const commentId = this.comment?.comment_id;
      const channelId = this.comment?.author?.id;

      if (!commentId || !channelId)
        throw new InnertubeError('Cannot build replies token: missing commentId or channelId.');

      const token = GetCommentsSectionParams.encode({
        ctx: { videoId: effectiveVideoId },
        unkParam: 6,
        params: {
          target: 'comments-section',
          repliesOpts: {
            commentId,
            videoId: effectiveVideoId,
            channelId,
            unkParam1: 4,
            unkParam2: 50,
            unkopts: { unkParam: 0 }
          }
        }
      });

      const continuation_token = encodeURIComponent(u8ToBase64(token.finish()));

      const cmd = new NavigationEndpoint({
        continuationCommand: {
          request: 'CONTINUATION_REQUEST_TYPE_WATCH_NEXT',
          token: continuation_token
        }
      });

      response = await cmd.call(this.#actions, { parse: true });
    }

    if (!response.on_response_received_endpoints_memo)
      throw new InnertubeError('Unexpected response.', response);

    this.replies = this.#getPatchedReplies(response.on_response_received_endpoints_memo);
    this.#continuation = response.on_response_received_endpoints_memo.getType(ContinuationItem)[0];

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

    this.replies = this.#getPatchedReplies(response.on_response_received_endpoints_memo);
    this.#continuation = response.on_response_received_endpoints_memo.getType(ContinuationItem)[0];

    return this;
  }

  setActions(actions: Actions) {
    this.#actions = actions;
  }

  #getPatchedReplies(data: Memo): ObservedArray<CommentView> {
    return observe(data.getType(CommentView).map((comment) => {
      comment.setActions(this.#actions);
      return comment;
    }));
  }
}