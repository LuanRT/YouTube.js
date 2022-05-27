export = Actions;
/** namespace **/
declare class Actions {
    /**
     * @param {Innertube} session
     * @constructor
     */
    constructor(session: Innertube);
    /**
     * Covers `/browse` endpoint, mostly used to access
     * YouTube's sections such as the home feed, etc
     * and sometimes to retrieve continuations.
     *
     * @param {string} id - browseId or a continuation token
     * @param {object} args - additional arguments
     * @param {string} [args.params]
     * @param {boolean} [args.is_ytm]
     * @param {boolean} [args.is_ctoken]
     * @param {string} [args.client]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object }>}
     */
    browse(id: string, args?: {
        params?: string;
        is_ytm?: boolean;
        is_ctoken?: boolean;
        client?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Covers endpoints used to perform direct interactions
     * on YouTube.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.video_id]
     * @param {string} [args.channel_id]
     * @param {string} [args.comment_id]
     * @param {string} [args.comment_action]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    engage(action: string, args?: {
        video_id?: string;
        channel_id?: string;
        comment_id?: string;
        comment_action?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Covers endpoints related to account management.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.new_value]
     * @param {string} [args.setting_item_id]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object }>}
     */
    account(action: string, args?: {
        new_value?: string;
        setting_item_id?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Endpoint used for search.
     *
     * @param {object} args
     * @param {string} [args.query]
     * @param {object} [args.options]
     * @param {string} [args.options.period]
     * @param {string} [args.options.duration]
     * @param {string} [args.options.order]
     * @param {string} [args.client]
     * @param {string} [args.ctoken]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    search(args?: {
        query?: string;
        options?: {
            period?: string;
            duration?: string;
            order?: string;
        };
        client?: string;
        ctoken?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Endpoint used fo Shorts' sound search.
     *
     * @param {object} args
     * @param {string} args.query
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    searchSound(args?: {
        query: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Channel management endpoints.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.new_name]
     * @param {string} [args.new_description]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    channel(action: string, args?: {
        new_name?: string;
        new_description?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Covers endpoints used for playlist management.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.title]
     * @param {string} [args.ids]
     * @param {string} [args.playlist_id]
     * @param {string} [args.action]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    playlist(action: string, args?: {
        title?: string;
        ids?: string;
        playlist_id?: string;
        action?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Covers endpoints used for notifications management.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.pref]
     * @param {string} [args.channel_id]
     * @param {string} [args.ctoken]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    notifications(action: string, args: {
        pref?: string;
        channel_id?: string;
        ctoken?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Covers livechat endpoints.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.text]
     * @param {string} [args.video_id]
     * @param {string} [args.channel_id]
     * @param {string} [args.ctoken]
     * @param {string} [args.params]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    livechat(action: string, args?: {
        text?: string;
        video_id?: string;
        channel_id?: string;
        ctoken?: string;
        params?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Endpoint used to retrieve video thumbnails.
     *
     * @param {object} args
     * @param {string} args.video_id
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    thumbnails(args?: {
        video_id: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Place Autocomplete endpoint, found it in the APK but
     * doesn't seem to be used anywhere on YouTube (maybe for ads?).
     *
     * Ex:
     * ```js
     * const places = await session.actions.geo('place_autocomplete', { input: 'San diego cafe' });
     * console.info(places.data);
     * ```
     *
     * @param {string} action
     * @param {object} args
     * @param {string} args.input
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    geo(action: string, args?: {
        input: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Covers endpoints used to report content.
     *
     * @param {string} action
     * @param {object} args
     * @param {object} [args.action]
     * @param {string} [args.params]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    flag(action: string, args: {
        action?: object;
        params?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Covers specific YouTube Music endpoints.
     *
     * @param {string} action
     * @param {string} args.input
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    music(action: string, args: any): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Mostly used for pagination and specific operations.
     *
     * @param {object} args
     * @param {string} [args.video_id]
     * @param {string} [args.ctoken]
     * @param {string} [args.client]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    next(args?: {
        video_id?: string;
        ctoken?: string;
        client?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Used to retrieve video info.
     *
     * @param {string} id
     * @param {string} [cpn]
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    getVideoInfo(id: string, cpn?: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Covers search suggestion endpoints.
     *
     * @param {string} client
     * @param {string} input
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    getSearchSuggestions(client: string, query: any): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Endpoint used to retrieve user mention suggestions.
     *
     * @param {object} args
     * @param {string} args.input
     *
     * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
     */
    getUserMentionSuggestions(args?: {
        input: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    #private;
}
