export = AccountManager;
/** @namespace */
declare class AccountManager {
    /**
     * @param {Actions} actions
     * @constructor
     */
    constructor(actions: Actions);
    /** @namespace */
    channel: {
        /**
         * Edits channel name.
         *
         * @param {string} new_name
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        editDescription: (new_description: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Retrieves basic channel analytics.
         * @borrows AccountManager#getAnalytics as getBasicAnalytics
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
             * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
             * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
             * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
             * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
             * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
             * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
             * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
             * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
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
     * @returns {Promise.<{ name: string; email: string; channel_id: string; subscriber_count: string; photo: object[]; }>}
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
     * @returns {Promise.<{ title: string; time: string; }[]>}
     */
    getTimeWatched(): Promise<{
        title: string;
        time: string;
    }[]>;
    /**
     * Retrieves basic channel analytics.
     * @returns {Promise.<Analytics>}
     */
    getAnalytics(): Promise<Analytics>;
    /**
     * Returns the account's library.
     * @returns {Promise.<Library>}
     */
    getLibrary(): Promise<Library>;
    #private;
}
import Analytics = require("./Analytics");
import Library = require("./Library");
