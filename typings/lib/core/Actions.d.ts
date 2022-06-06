export = Actions;
/**
* API response.
* @typedef {Promise.<{ success: boolean; status_code: number; data: object; }>} Response
*/
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
     * @returns {Response}
     */
    browse(id: string, args?: {
        params?: string;
        is_ytm?: boolean;
        is_ctoken?: boolean;
        client?: string;
    }): Response;
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
     * @returns {Response}
     */
    engage(action: string, args?: {
        video_id?: string;
        channel_id?: string;
        comment_id?: string;
        comment_action?: string;
    }): Response;
    /**
     * Covers endpoints related to account management.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.new_value]
     * @param {string} [args.setting_item_id]
     *
     * @returns {Response}
     */
    account(action: string, args?: {
        new_value?: string;
        setting_item_id?: string;
    }): Response;
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
     * @returns {Response}
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
    }): Response;
    /**
     * Endpoint used fo Shorts' sound search.
     *
     * @param {object} args
     * @param {string} args.query
     *
     * @returns {Response}
     */
    searchSound(args?: {
        query: string;
    }): Response;
    /**
     * Channel management endpoints.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.new_name]
     * @param {string} [args.new_description]
     *
     * @returns {Response}
     */
    channel(action: string, args?: {
        new_name?: string;
        new_description?: string;
    }): Response;
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
     * @returns {Response}
     */
    playlist(action: string, args?: {
        title?: string;
        ids?: string;
        playlist_id?: string;
        action?: string;
    }): Response;
    /**
     * Covers endpoints used for notifications management.
     *
     * @param {string} action
     * @param {object} args
     * @param {string} [args.pref]
     * @param {string} [args.channel_id]
     * @param {string} [args.ctoken]
     *
     * @returns {Response}
     */
    notifications(action: string, args?: {
        pref?: string;
        channel_id?: string;
        ctoken?: string;
    }): Response;
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
     * @returns {Response}
     */
    livechat(action: string, args?: {
        text?: string;
        video_id?: string;
        channel_id?: string;
        ctoken?: string;
        params?: string;
    }): Response;
    /**
     * Endpoint used to retrieve video thumbnails.
     *
     * @param {object} args
     * @param {string} args.video_id
     *
     * @returns {Response}
     */
    thumbnails(args?: {
        video_id: string;
    }): Response;
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
     * @returns {Response}
     */
    geo(action: string, args?: {
        input: string;
    }): Response;
    /**
     * Covers endpoints used to report content.
     *
     * @param {string} action
     * @param {object} args
     * @param {object} [args.action]
     * @param {string} [args.params]
     *
     * @returns {Response}
     */
    flag(action: string, args: {
        action?: object;
        params?: string;
    }): Response;
    /**
     * Covers specific YouTube Music endpoints.
     *
     * @param {string} action
     * @param {string} args.input
     *
     * @returns {Response}
     */
    music(action: string, args: any): Response;
    /**
     * Mostly used for pagination and specific operations.
     *
     * @param {object} args
     * @param {string} [args.video_id]
     * @param {string} [args.ctoken]
     * @param {string} [args.client]
     *
     * @returns {Response}
     */
    next(args?: {
        video_id?: string;
        ctoken?: string;
        client?: string;
    }): Response;
    /**
     * Used to retrieve video info.
     *
     * @param {string} id
     * @param {string} [cpn]
     *
     * @returns {Response}
     */
    getVideoInfo(id: string, cpn?: string): Response;
    /**
     * Covers search suggestion endpoints.
     *
     * @param {string} client
     * @param {string} input
     *
     * @returns {Response}
     */
    getSearchSuggestions(client: string, query: any): Response;
    /**
     * Endpoint used to retrieve user mention suggestions.
     *
     * @param {object} args
     * @param {string} args.input
     *
     * @returns {Response}
     */
    getUserMentionSuggestions(args?: {
        input: string;
    }): Response;
    #private;
}
declare namespace Actions {
    export { Response };
}
/**
 * API response.
 */
type Response = Promise<{
    success: boolean;
    status_code: number;
    data: object;
}>;
