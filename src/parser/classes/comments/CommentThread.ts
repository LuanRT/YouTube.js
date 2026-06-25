import { Parser } from '../../index.js';
import Button from '../Button.js';
import ContinuationItem from '../ContinuationItem.js';
import CommentView from './CommentView.js';
import CommentReplies from './CommentReplies.js';
import CommentsContinuation from '../misc/CommentsContinuation.js';
import AppendContinuationItemsAction from '../actions/AppendContinuationItemsAction.js';
import { InnertubeError } from '../../../utils/Utils.js';
import { observe, YTNode } from '../../helpers.js';

import type { RawNode } from '../../index.js';
import type Actions from '../../../core/Actions.js';
import type { ObservedArray } from '../../helpers.js';

export default class CommentThread extends YTNode {
  static type = 'CommentThread';

  public comment: CommentView | null;
  public replies?: ObservedArray<CommentThread>;
  public comment_replies_data: CommentReplies | null;
  public is_moderated_elq_comment: boolean;
  public has_replies: boolean;
  public rendering_priority?:
    | 'RENDERING_PRIORITY_UNKNOWN'
    | 'RENDERING_PRIORITY_PINNED_COMMENT'
    | 'RENDERING_PRIORITY_LINKED_COMMENT'
    | 'RENDERING_PRIORITY_REALTIME_COMMENT'
    | 'RENDERING_PRIORITY_COMMUNITY_GUIDELINES_BELOW_HEADER'
    | 'RENDERING_PRIORITY_FAN_COMMUNITY_SETUP_CARD'
    | 'RENDERING_PRIORITY_COMMENT_HEADER';

  #actions?: Actions;
  #continuation?: ContinuationItem;

  constructor(data: RawNode) {
    super();
    this.comment = Parser.parseItem(data.commentViewModel, CommentView);
    this.comment_replies_data = Parser.parseItem(data.replies, CommentReplies);
    this.is_moderated_elq_comment = data.isModeratedElqComment;
    this.rendering_priority = data.renderingPriority;
    this.has_replies = !!this.comment_replies_data;
  }

  /**
   * Indicates whether this comment thread has more replies that can be fetched.
   */
  get has_continuation(): boolean {
    if (!this.replies)
      throw new InnertubeError('Cannot determine if there is a continuation because this comment thread\'s replies have not been loaded');
    return !!this.#continuation;
  }

  /**
   * Indicates whether this comment thread has prepopulated reply data. If false, you will need to call {@link CommentThread.getReplies} to fetch the initial batch of replies.
   */
  get is_prepopulated(): boolean {
    return !!this.comment_replies_data && this.comment_replies_data.sub_threads[0].is(CommentThread);
  }

  /**
   * Retrieves replies to this comment thread.
   */
  async getReplies(): Promise<CommentThread> {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment thread');

    if (!this.comment_replies_data)
      throw new InnertubeError('This comment thread has no replies', this);

    if (!this.is_prepopulated) {
      const continuation = this.comment_replies_data.sub_threads.firstOfType(ContinuationItem);

      if (!continuation)
        throw new InnertubeError('Replies continuation item not found');

      let endpoint = continuation.endpoint;

      if (continuation.button)
        endpoint = continuation.button.endpoint;

      const response = await endpoint.call(this.#actions, { parse: true });

      if (!response.on_response_received_endpoints)
        throw new InnertubeError('Unexpected response', response);

      const appendContinuationItemsNode = response.on_response_received_endpoints.firstOfType(AppendContinuationItemsAction);

      if (appendContinuationItemsNode) {
        this.#processList(appendContinuationItemsNode.contents.as(CommentThread, ContinuationItem));
      }
    }

    return this;
  }

  /**
   * Retrieves next batch of replies.
   */
  async getContinuation(): Promise<CommentsContinuation> {
    if (!this.replies)
      throw new InnertubeError('Cannot retrieve continuation because this comment thread\'s replies have not been loaded');

    if (!this.#continuation)
      throw new InnertubeError('No continuation item found');

    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment thread');

    const loadMoreButton = this.#continuation.button?.as(Button);

    if (!loadMoreButton)
      throw new InnertubeError('Cannot retrieve continuation because the "Load more" button is missing');

    const response = await loadMoreButton.endpoint.call(this.#actions, { parse: true });

    return new CommentsContinuation(this.#actions, response);
  }

  /**
   * @internal
   */
  public setActions(actions: Actions): void {
    this.#actions = actions;
  }

  /**
   * @internal
   */
  public processRepliesData(): void {
    if (this.is_prepopulated && !this.replies) {
      this.#processList(this.comment_replies_data!.sub_threads);
    }
  }

  #processList(contents: ObservedArray<CommentThread | ContinuationItem>): void {
    if (!this.#actions)
      throw new InnertubeError('Actions instance not set for this comment thread');

    this.replies = observe([]);

    for (const item of contents) {
      if (item.is(CommentThread)) {
        item.setActions(this.#actions);
        item.processRepliesData();
        this.replies.push(item);
      } else if (item.is(ContinuationItem)) {
        this.#continuation = item;
      }
    }
  }
}