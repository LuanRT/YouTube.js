export = Comments;
declare class Comments {
    constructor(actions: any, data: any, already_parsed?: boolean);
    /** @type {import('../classes/comments/CommentsHeader')} */
    header: import('../classes/comments/CommentsHeader');
    /** @type {import('../classes/comments/CommentThread')[]} */
    contents: import('../classes/comments/CommentThread')[];
    /**
     * Creates a top-level comment.
     * @param {string} text
     * @returns {Promise.<{ success: boolean, status_code: number, data: object }>}
     */
    comment(text: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Retrieves next batch of comments.
     * @returns {Promise.<Comments>}
     */
    getContinuation(): Promise<Comments>;
    get page(): any;
    #private;
}
