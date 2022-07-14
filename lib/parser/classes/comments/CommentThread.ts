import Parser from "../../index.js";
import { InnertubeError } from "../../../utils/Utils.js";

import { YTNode } from "../../helpers";
import Comment from "./Comment";
import ContinuationItem from "../ContinuationItem.js";
import Actions from "../../../core/Actions.js";
import NavigationEndpoint from "../NavigationEndpoint.js";

class CommentThread extends YTNode {
    static type = 'CommentThread';
    #replies;
    #actions?: Actions;
    #continuation?: ContinuationItem;
    is_moderated_elq_comment: boolean;
    comment;
    replies: Comment[] | undefined;
    constructor(data: any) {
        super();
        this.comment = Parser.parseItem(data.comment, Comment);
        this.#replies = Parser.parseItem(data.replies);
        this.is_moderated_elq_comment = data.isModeratedElqComment;
    }
    /**
     * Retrieves replies to this comment thread.
     * @returns {Promise.<CommentThread>}
     */
    async getReplies() {
        if (!this.#actions)
            throw new InnertubeError('Actions not set for this CommentThread.');
        if (!this.#replies)
            throw new InnertubeError('This comment has no replies.', { comment_id: this.comment?.comment_id });
        const continuation = this.#replies.key("contents").parsed().array().get({ type: 'ContinuationItem' })?.as(ContinuationItem);
        const response = await continuation?.endpoint.callTest(this.#actions);
        this.replies = response?.on_response_received_endpoints_memo?.getType(Comment).map((comment) => {
            comment.setActions(this.#actions);
            return comment;
        });
        this.#continuation = response?.on_response_received_endpoints_memo.getType(ContinuationItem)?.[0];
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
        if (!this.#actions)
            throw new InnertubeError('Actions not set for this CommentThread.');
        const response = await this.#continuation.button?.item().key("endpoint").nodeOfType(NavigationEndpoint).callTest(this.#actions);
        this.replies = response?.on_response_received_endpoints_memo.getType(Comment).map((comment) => {
            comment.setActions(this.#actions);
            return comment;
        });
        this.#continuation = response?.on_response_received_endpoints_memo.getType(ContinuationItem)?.[0];
        return this;
    }
    setActions(actions: Actions) {
        this.#actions = actions;
    }
}
export default CommentThread;
