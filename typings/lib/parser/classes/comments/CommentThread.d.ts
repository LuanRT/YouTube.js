export = CommentThread;
declare class CommentThread {
    constructor(data: any);
    type: string;
    /** @type {import('./Comment')} */
    comment: import('./Comment');
    /** @type {boolean} */
    is_moderated_elq_comment: boolean;
    /**
     * Retrieves replies to this comment thread.
     * @returns {Promise.<CommentThread>}
     */
    getReplies(): Promise<CommentThread>;
    replies: any;
    /**
     * Retrieves next batch of replies.
     * @returns {Promise.<CommentThread>}
     */
    getContinuation(): Promise<CommentThread>;
    /**
     * @param {import('../../../core/Actions')} actions
     * @private
     */
    private setActions;
    #private;
}
