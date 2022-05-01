export = Innertube;
declare class Innertube {
    /**
     * ```js
     * const Innertube = require('youtubei.js');
     * const youtube = await new Innertube();
     * ```
     * @param {object} [config]
     * @param {string} [config.gl]
     * @param {string} [config.cookie]
     * @returns {Innertube}
     * @constructor
     */
    constructor(config?: {
        gl?: string;
        cookie?: string;
    });
    config: {
        gl?: string;
        cookie?: string;
    };
    key: any;
    version: any;
    context: any;
    player_url: any;
    logged_in: any;
    sts: any;
    /**
     * @event Innertube#auth - Fired when signing in to an account.
     * @event Innertube#update-credentials - Fired when the access token is no longer valid.
     * @type {EventEmitter}
     */
    ev: EventEmitter;
    auth_apisid: any;
    request: Request;
    account: {
        info: () => Promise<{
            name: string;
            photo: Array<object>;
            country: string;
            language: string;
        }>;
        settings: {
            notifications: {
                /**
                 * Notify about activity from the channels you're subscribed to.
                 *
                 * @param {boolean} new_value
                 * @returns {Promise.<{ success: boolean; status_code: string; }>}
                 */
                setSubscriptions: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: string;
                }>;
                /**
                 * Recommended content notifications.
                 *
                 * @param {boolean} new_value
                 * @returns {Promise.<{ success: boolean; status_code: string; }>}
                 */
                setRecommendedVideos: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: string;
                }>;
                /**
                 * Notify about activity on your channel.
                 *
                 * @param {boolean} new_value
                 * @returns {Promise.<{ success: boolean; status_code: string; }>}
                 */
                setChannelActivity: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: string;
                }>;
                /**
                 * Notify about replies to your comments.
                 *
                 * @param {boolean} new_value
                 * @returns {Promise.<{ success: boolean; status_code: string; }>}
                 */
                setCommentReplies: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: string;
                }>;
                /**
                 * Notify when others mention your channel.
                 *
                 * @param {boolean} new_value
                 * @returns {Promise.<{ success: boolean; status_code: string; }>}
                 */
                setMentions: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: string;
                }>;
                /**
                 * Notify when others share your content on their channels.
                 *
                 * @param {boolean} new_value
                 * @returns {Promise.<{ success: boolean; status_code: string; }>}
                 */
                setSharedContent: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: string;
                }>;
            };
            privacy: {
                /**
                 * If set to true, your subscriptions won't be visible to others.
                 *
                 * @param {boolean} new_value
                 * @returns {Promise.<{ success: boolean; status_code: string; }>}
                 */
                setSubscriptionsPrivate: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: string;
                }>;
                /**
                 * If set to true, saved playlists won't appear on your channel.
                 *
                 * @param {boolean} new_value
                 * @returns {Promise.<{ success: boolean; status_code: string; }>}
                 */
                setSavedPlaylistsPrivate: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: string;
                }>;
            };
        };
    };
    interact: {
        /**
         * Likes a given video.
         *
         * @param {string} video_id
         * @returns {Promise.<{ success: boolean; status_code: string; }>}
         */
        like: (video_id: string) => Promise<{
            success: boolean;
            status_code: string;
        }>;
        /**
         * Diskes a given video.
         *
         * @param {string} video_id
         * @returns {Promise.<{ success: boolean; status_code: string; }>}
         */
        dislike: (video_id: string) => Promise<{
            success: boolean;
            status_code: string;
        }>;
        /**
         * Removes a like/dislike.
         *
         * @param {string} video_id
         * @returns {Promise.<{ success: boolean; status_code: string; }>}
         */
        removeLike: (video_id: string) => Promise<{
            success: boolean;
            status_code: string;
        }>;
        /**
         * Posts a comment on a given video.
         *
         * @param {string} video_id
         * @param {string} text
         * @returns {Promise.<{ success: boolean; status_code: string; }>}
         */
        comment: (video_id: string, text: string) => Promise<{
            success: boolean;
            status_code: string;
        }>;
        /**
         * Subscribes to a given channel.
         *
         * @param {string} channel_id
         * @returns {Promise.<{ success: boolean; status_code: string; }>}
         */
        subscribe: (channel_id: string) => Promise<{
            success: boolean;
            status_code: string;
        }>;
        /**
         * Unsubscribes from a given channel.
         *
         * @param {string} channel_id
         * @returns {Promise.<{ success: boolean; status_code: string; }>}
         */
        unsubscribe: (channel_id: string) => Promise<{
            success: boolean;
            status_code: string;
        }>;
        /**
         * Changes notification preferences for a given channel.
         * Only works with channels you are subscribed to.
         *
         * @param {string} channel_id
         * @param {string} type PERSONALIZED | ALL | NONE
         * @returns {Promise.<{ success: boolean; status_code: string; }>}
         */
        setNotificationPreferences: (channel_id: string, type: string) => Promise<{
            success: boolean;
            status_code: string;
        }>;
    };
    playlist: {
        /**
         * Creates a playlist.
         *
         * @param {string} title
         * @param {string} video_ids
         * @returns {Promise.<{ success: boolean; status_code: string; playlist_id: string; }>}
         */
        create: (title: string, video_ids: string) => Promise<{
            success: boolean;
            status_code: string;
            playlist_id: string;
        }>;
        /**
         * Deletes a given playlist.
         *
         * @param {string} playlist_id
         * @returns {Promise.<{ success: boolean; status_code: string; playlist_id: string;  }>}
         */
        delete: (playlist_id: string) => Promise<{
            success: boolean;
            status_code: string;
            playlist_id: string;
        }>;
        /**
         * Adds an array of videos to a given playlist.
         *
         * @param {string} playlist_id
         * @param {Array.<string>} video_ids
         * @returns {Promise.<{ success: boolean; status_code: string; playlist_id: string; }>}
         */
        addVideos: (playlist_id: string, video_ids: Array<string>) => Promise<{
            success: boolean;
            status_code: string;
            playlist_id: string;
        }>;
        /**
         * Removes videos from a given playlist.
         *
         * @param {string} playlist_id
         * @param {Array.<string>} video_ids
         * @returns {Promise.<{ success: boolean; status_code: string; playlist_id: string; }>}
         */
        removeVideos: (playlist_id: string, video_ids: Array<string>) => Promise<{
            success: boolean;
            status_code: string;
            playlist_id: string;
        }>;
    };
    /**
     * Signs-in to a google account.
     *
     * @param {object} auth_info
     * @param {string} auth_info.access_token - Token used to sign in.
     * @param {string} auth_info.refresh_token - Token used to get a new access token.
     * @param {Date} auth_info.expires - Access token's expiration date, which is usually 24hrs-ish
     * @returns {Promise.<void>}
     */
    signIn(auth_info?: {
        access_token: string;
        refresh_token: string;
        expires: Date;
    }): Promise<void>;
    access_token: any;
    refresh_token: any;
    /**
     * Signs out of your account.
     * @returns {Promise.<{ success: boolean; status_code: number }>}
     */
    signOut(): Promise<{
        success: boolean;
        status_code: number;
    }>;
    /**
     * Retrieves account details.
     * @returns {Promise.<{ name: string; photo: Array<object>; country: string; language: string; }>}
     */
    getAccountInfo(): Promise<{
        name: string;
        photo: Array<object>;
        country: string;
        language: string;
    }>;
    /**
     * Searches on YouTube.
     *
     * @param {string} query - Search query.
     * @param {object} options - Search options.
     * @param {string} option.params - Pre-defined search parameter.
     * @param {string} options.client - Client used to perform the search, can be: `YTMUSIC` or `YOUTUBE`.
     * @param {string} options.period - Filter videos uploaded within a period, can be: any | hour | day | week | month | year
     * @param {string} options.order - Filter results by order, can be: relevance | rating | age | views
     * @param {string} options.duration - Filter video results by duration, can be: any | short | long
     * @returns {Promise.<{ query: string; corrected_query: string; estimated_results: number; videos: [] } |
     * { results: { songs: []; videos: []; albums: []; community_playlists: [] } }>}
     */
    search(query: string, options?: object): Promise<{
        query: string;
        corrected_query: string;
        estimated_results: number;
        videos: [];
    } | {
        results: {
            songs: [];
            videos: [];
            albums: [];
            community_playlists: [];
        };
    }>;
    /**
     * Retrieves search suggestions.
     *
     * @param {string} input - The search query.
     * @param {object} [options] - Search options.
     * @param {string} [options.client='YOUTUBE'] - Client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
     * @returns {Promise.<[{ text: string; bold_text: string }]>}
     */
    getSearchSuggestions(input: string, options?: {
        client?: string;
    }): Promise<[{
        text: string;
        bold_text: string;
    }]>;
    /**
     * Retrieves video info.
     *
     * @param {string} video_id - Video id
     * @return {Promise.<{ title: string; description: string; thumbnail: []; metadata: object }>}
     */
    getDetails(video_id: string): Promise<{
        title: string;
        description: string;
        thumbnail: [];
        metadata: object;
    }>;
    /**
     * Retrieves comments for a video.
     *
     * @param {string} video_id - Video id
     * @param {string} [sort_by] - Can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
     * @return {Promise.<{ page_count: number; comment_count: number; items: []; }>}
     */
    getComments(video_id: string, sort_by?: string): Promise<{
        page_count: number;
        comment_count: number;
        items: [];
    }>;
    /**
     * Retrieves contents for a given channel. (WIP)
     *
     * @param {string} id - The id of the channel.
     * @return {Promise.<{ title: string; description: string; metadata: object; content: object }>}
     */
    getChannel(id: string): Promise<{
        title: string;
        description: string;
        metadata: object;
        content: object;
    }>;
    /**
     * Retrieves your watch history.
     * @returns {Promise.<{ items: [{ date: string; videos: [] }] }>}
     */
    getHistory(): Promise<{
        items: [{
            date: string;
            videos: [];
        }];
    }>;
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     * @returns {Promise.<{ videos: [{ id: string; title: string; description: string; channel: string; metadata: object }] }>}
     */
    getHomeFeed(): Promise<{
        videos: [{
            id: string;
            title: string;
            description: string;
            channel: string;
            metadata: object;
        }];
    }>;
    /**
     * Retrieves trending content.
     * @returns {Promise.<{ now: { content: [{ title: string; videos: []; }] };
     * music: { getVideos: Promise.<Array>; }; gaming: { getVideos: Promise.<Array>; };
     * gaming: { getVideos: Promise.<Array>; }; }>}
     */
    getTrending(): Promise<{
        now: {
            content: [{
                title: string;
                videos: [];
            }];
        };
        music: {
            getVideos: Promise<any[]>;
        };
        gaming: {
            getVideos: Promise<any[]>;
        };
        gaming: {
            getVideos: Promise<any[]>;
        };
    }>;
    /**
     * Retrieves your subscriptions feed.
     * @returns {Promise.<{ items: [{ date: string; videos: [] }] }>}
     */
    getSubscriptionsFeed(): Promise<{
        items: [{
            date: string;
            videos: [];
        }];
    }>;
    /**
     * Retrieves your notifications.
     * @returns {Promise.<{ items: [{ title: string; sent_time: string; channel_name: string; channel_thumbnail: {}; video_thumbnail: {}; video_url: string; read: boolean; notification_id: string }] }>}
     */
    getNotifications(): Promise<{
        items: [{
            title: string;
            sent_time: string;
            channel_name: string;
            channel_thumbnail: {};
            video_thumbnail: {};
            video_url: string;
            read: boolean;
            notification_id: string;
        }];
    }>;
    /**
     * Retrieves unseen notifications count.
     * @returns {Promise.<number>} unseen notifications count.
     */
    getUnseenNotificationsCount(): Promise<number>;
    /**
     * Retrieves lyrics for a given song if available.
     *
     * @param {string} video_id
     * @returns {Promise.<string>} Song lyrics
     */
    getLyrics(video_id: string): Promise<string>;
    /**
     * Parses a given playlist.
     *
     * @param {string} playlist_id - The id of the playlist.
     * @param {object} options - { client: YOUTUBE | YTMUSIC }
     * @param {string} options.client - Client used to parse the playlist, can be: `YTMUSIC` | `YOUTUBE`
     * @returns {Promise.<
     *  { title: string; description: string; total_items: string; last_updated: string; views: string; items: [] } |
     *  { title: string; description: string; total_items: number; duration: string; year: string; items: [] }>}
     */
    getPlaylist(playlist_id: string, options?: {
        client: string;
    }): Promise<{
        title: string;
        description: string;
        total_items: string;
        last_updated: string;
        views: string;
        items: [];
    } | {
        title: string;
        description: string;
        total_items: number;
        duration: string;
        year: string;
        items: [];
    }>;
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * @param {string} id - Video id
     * @param {object} options - Download options.
     * @param {string} options.quality - Video quality; 360p, 720p, 1080p, etc....
     * @param {string} options.type - Download type, can be: video, audio or videoandaudio
     * @param {string} options.format - File format
     * @returns {Promise.<{ selected_format: {}; formats: [] }>}
     */
    getStreamingData(id: string, options?: {
        quality: string;
        type: string;
        format: string;
    }): Promise<{
        selected_format: {};
        formats: [];
    }>;
    /**
     * Downloads a given video. If you only need the direct download link take a look at {@link getStreamingData}.
     *
     * @param {string} id - Video id
     * @param {object} options - Download options.
     * @param {string} options.quality - Video quality; 360p, 720p, 1080p, etc....
     * @param {string} options.type - Download type, can be: video, audio or videoandaudio
     * @param {string} options.format - File format
     * @return {ReadableStream}
     */
    download(id: string, options?: {
        quality: string;
        type: string;
        format: string;
    }): ReadableStream;
    #private;
}
import Request = require("./utils/Request");
