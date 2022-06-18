export = AccountManager;
/** @namespace */
declare class AccountManager {
    /**
     * @param {import('./Actions')} actions
     */
    constructor(actions: import('./Actions'));
    /**
     * API response.
     *
     * @typedef {{ success: boolean, status_code: number, data: object }} Response
     */
    /** @namespace */
    channel: {
        /**
         * Edits channel name.
         *
         * @param {string} new_name
         * @returns {Promise.<Response>}
         */
        editName: (new_name: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Edits channel description.
         *
         * @param {string} new_description
         * @returns {Promise.<Response>}
         */
        editDescription: (new_description: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Retrieves basic channel analytics.
         *
         * @borrows getAnalytics as getBasicAnalytics
         */
        getBasicAnalytics: () => Promise<Analytics>;
    };
    /** @namespace */
    settings: {
        notifications: {
            /**
             * Notify about activity from the channels you're subscribed to.
             *
             * @param {boolean} option - ON | OFF
             * @returns {Promise.<Response>}
             */
            setSubscriptions: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: object;
            }>;
            /**
             * Recommended content notifications.
             *
             * @param {boolean} option - ON | OFF
             * @returns {Promise.<Response>}
             */
            setRecommendedVideos: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: object;
            }>;
            /**
             * Notify about activity on your channel.
             *
             * @param {boolean} option - ON | OFF
             * @returns {Promise.<Response>}
             */
            setChannelActivity: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: object;
            }>;
            /**
             * Notify about replies to your comments.
             *
             * @param {boolean} option - ON | OFF
             * @returns {Promise.<Response>}
             */
            setCommentReplies: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: object;
            }>;
            /**
             * Notify when others mention your channel.
             *
             * @param {boolean} option - ON | OFF
             * @returns {Promise.<Response>}
             */
            setMentions: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: object;
            }>;
            /**
             * Notify when others share your content on their channels.
             *
             * @param {boolean} option - ON | OFF
             * @returns {Promise.<Response>}
             */
            setSharedContent: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: object;
            }>;
        };
        privacy: {
            /**
             * If set to true, your subscriptions won't be visible to others.
             *
             * @param {boolean} option - ON | OFF
             * @returns {Promise.<Response>}
             */
            setSubscriptionsPrivate: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: object;
            }>;
            /**
             * If set to true, saved playlists won't appear on your channel.
             *
             * @param {boolean} option - ON | OFF
             * @returns {Promise.<Response>}
             */
            setSavedPlaylistsPrivate: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: object;
            }>;
        };
    };
    /**
     * Retrieves channel info.
     *
     * @returns {Promise.<{ name: string, email: string, channel_id: string, subscriber_count: string, photo: object[] }>}
     */
    getInfo(): Promise<{
        name: string;
        email: string;
        channel_id: string;
        subscriber_count: string;
        photo: object[];
    }>;
    /**
     * Retrieves time watched statistics.
     *
     * @returns {Promise.<Array.<{ title: string, time: string }>>}
     */
    getTimeWatched(): Promise<Array<{
        title: string;
        time: string;
    }>>;
    /**
     * Retrieves basic channel analytics.
     *
     * @returns {Promise.<Analytics>}
     */
    getAnalytics(): Promise<Analytics>;
    #private;
}
import Analytics = require("../parser/youtube/Analytics");
