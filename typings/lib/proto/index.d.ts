export = Proto;
declare class Proto {
    /**
     * Encodes visitor data.
     *
     * @param {string} id
     * @param {number} timestamp
     * @returns {string}
     */
    static encodeVisitorData(id: string, timestamp: number): string;
    /**
     * Encodes basic channel analytics parameters.
     *
     * @param {string} channel_id
     * @returns {string}
     */
    static encodeChannelAnalyticsParams(channel_id: string): string;
    /**
     * Encodes search filters.
     *
     * @param {object} filters
     * @param {string} [filters.upload_date] - all | hour | today | week | month | year
     * @param {string} [filters.type] - all | video | channel | playlist | movie
     * @param {string} [filters.duration] - all | short | medium | long
     * @param {string} [filters.sort_by] - relevance | rating | upload_date | view_count
     * @returns {string}
     */
    static encodeSearchFilters(filters: {
        upload_date?: string;
        type?: string;
        duration?: string;
        sort_by?: string;
    }): string;
    /**
     * Encodes YouTube Music search filters.
     *
     * @param {object} filters
     * @param {string} filters.type - all | song | video | album | playlist | artist
     * @returns {string}
     */
    static encodeMusicSearchFilters(filters?: {
        type: string;
    }): string;
    /**
     * Encodes livechat message parameters.
     *
     * @param {string} channel_id
     * @param {string} video_id
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
     * @returns {string}
     */
    static encodeCommentsSectionParams(video_id: string, options?: {
        type: string;
        sort_by: string;
    }): string;
    /**
     * Encodes comment replies parameters.
     *
     * @param {string} video_id
     * @param {string} comment_id
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
     * @returns {string}
     */
    static encodeCommentReplyParams(comment_id: string, video_id: string): string;
    /**
     * Encodes comment action parameters.
     *
     * @param {string} type
     * @param {object} [args]
     * @param {string} [args.comment_id]
     * @param {string} [args.video_id]
     * @param {string} [args.text]
     * @param {string} [args.target_language]
     * @returns {string}
     */
    static encodeCommentActionParams(type: string, args?: {
        comment_id?: string;
        video_id?: string;
        text?: string;
        target_language?: string;
    }): string;
    /**
     * Encodes notification preference parameters.
     *
     * @param {string} channel_id
     * @param {number} index
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
