'use strict';

const Parser = require('..');
const { InnertubeError } = require('../../../utils/Utils');

class CommentThread {
  type = 'CommentThread';

  #replies;
  #actions;
  #continuation;

  constructor(data) {
    /** @type {import('./Comment')} */
    this.comment = Parser.parse(data.comment);
    this.#replies = Parser.parse(data.replies, 'comments');
    /** @type {boolean} */
    this.is_moderated_elq_comment = data.isModeratedElqComment;
  }

  /**
   * Retrieves replies to this comment thread.
   * @returns {Promise.<CommentThread>}
   */
  async getReplies() {
    if (!this.#replies)
      throw new InnertubeError('This comment has no replies.', { comment_id: this.comment.comment_id });

    const continuation = this.#replies.contents.get({ type: 'ContinuationItem' });
    const response = await continuation.endpoint.callTest(this.#actions);

    this.replies = response.on_response_received_endpoints_memo.get('Comment').map((comment) => {
      comment.setActions(this.#actions);
      return comment;
    });

    this.#continuation = response.on_response_received_endpoints_memo.get('ContinuationItem')?.[0];

    return this;
  }

  /**
   * Retrieves next batch of replies.
   * @returns {Promise.<CommentThread>}
   */
  async getContinuation() {
    if (!this.replies)
      throw new InnertubeError('Continuation not available.');

    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#continuation.button.endpoint.callTest(this.#actions);

    this.replies = response.on_response_received_endpoints_memo.get('Comment').map((comment) => {
      comment.setActions(this.#actions);
      return comment;
    });

    this.#continuation = response.on_response_received_endpoints_memo.get('ContinuationItem')?.[0];

    return this;
  }

  /**
   * @param {import('../../../core/Actions')} actions
   * @private
   */
  setActions(actions) {
    this.#actions = actions;
  }
}

module.exports = CommentThread;