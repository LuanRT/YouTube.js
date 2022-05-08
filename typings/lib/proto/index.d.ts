export = Proto;
declare class Proto {
    /**
     * Encodes visitor data.
     *
     * @param {string} id
     * @param {number} timestamp
     *
     * @returns {string}
     */
    static encodeVisitorData(id: string, timestamp: number): string;
    /**
     * Encodes search filters.
     *
     * @param {string} period
     * @param {string} duration
     * @param {string} order
     *
     * @todo implement remaining filters.
     *
     * @returns {string}
     */
    static encodeSearchFilter(period: string, duration: string, order: string): string;
    /**
     * Encodes livechat message parameters.
     *
     * @param {string} channel_id
     * @param {string} video_id
     *
     * @returns {string}
     */
    static encodeMessageParams(channel_id: string, video_id: string): string;
    /**
     * Encodes comment section parameters.
     *
     * @param {string} video_id
     * @param {object} options
     * @param {string} options.type
     * @param {string} options.sort_by
     *
     * @returns {string}
     */
    static encodeCommentsSectionParams(video_id: string, options?: {
        type: string;
        sort_by: string;
    }): string;
    /**
     * Encodes replies thread parameters.
     *
     * @param {string} video_id
     * @param {string} comment_id
     *
     * @returns {string}
     */
    static encodeCommentRepliesParams(video_id: string, comment_id: string): string;
    /**
     * Encodes comment parameters.
     *
     * @param {string} video_id
     * @returns {string}
     */
    static encodeCommentParams(video_id: string): string;
    /**
     * Encodes comment reply parameters.
     *
     * @param {string} comment_id
     * @param {string} video_id
     *
     * @return {string}
     */
    static encodeCommentReplyParams(comment_id: string, video_id: string): string;
    /**
     * Encodes comment action parameters.
     *
     * @param {string} type
     * @param {string} comment_id
     * @param {string} video_id
     * @param {string} [text]
     * @param {string} [target_language]
     *
     * @returns {string}
     */
    static encodeCommentActionParams(type: string, args?: {}): string;
    /**
     * Encodes notification preference parameters.
     *
     * @param {string} channel_id
     * @param {number} index
     *
     * @returns {string}
     */
    static encodeNotificationPref(channel_id: string, index: number): string;
    /**
     * Encodes sound info parameters.
     *
     * @param {string} id
     * @returns {string}
     */
    static encodeSoundInfoParams(id: string): string;
}
