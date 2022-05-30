export = Innertube;
/**
 * Innertube instance.
 * @namespace
 */
declare class Innertube {
    /**
     * @example
     * ```js
     * const Innertube = require('youtubei.js');
     * const youtube = await new Innertube();
     * ```
     *
     * @param {object} [config]
     * @param {string} [config.gl]
     * @param {string} [config.cookie]
     * @param {boolean} [config.debug]
     *
     * @returns {Innertube}
     * @constructor
     */
    constructor(config?: {
        gl?: string;
        cookie?: string;
        debug?: boolean;
    });
    config: {
        gl?: string;
        cookie?: string;
        debug?: boolean;
    };
    key: any;
    version: any;
    context: any;
    logged_in: boolean;
    player_url: any;
    sts: any;
    /**
     * @fires Innertube#auth - fired when signing in to an account.
     * @fires Innertube#update-credentials - fired when the access token is no longer valid.
     * @type {EventEmitter}
     */
    ev: EventEmitter;
    oauth: OAuth;
    auth_apisid: any;
    request: Request;
    actions: Actions;
    account: AccountManager;
    playlist: PlaylistManager;
    interact: InteractionManager;
    /**
     * Signs in to a google account.
     *
     * @param {object} auth_info
     * @param {string} auth_info.access_token - Token used to sign in.
     * @param {string} auth_info.refresh_token - Token used to get a new access token.
     * @param {Date} auth_info.expires - Access token's expiration date, which is usually 24hrs-ish.
     *
     * @returns {Promise.<void>}
     */
    signIn(auth_info?: {
        access_token: string;
        refresh_token: string;
        expires: Date;
    }): Promise<void>;
    access_token: string;
    refresh_token: string;
    /**
     * Signs out of an account.
     * @returns {Promise.<{ success: boolean; status_code: number }>}
     */
    signOut(): Promise<{
        success: boolean;
        status_code: number;
    }>;
    /**
     * Searches a given query.
     *
     * @param {string} query - search query.
     * @param {object} [options] - search options.
     * @param {string} [options.client] - client used to perform the search, can be: `YTMUSIC` or `YOUTUBE`.
     * @param {object} [options.filters] - search filters.
     * @param {string} [options.filters.upload_date] - filter videos by upload date, can be: any | last_hour | today | this_week | this_month | this_year
     * @param {string} [options.filters.type] - filter results by type, can be: any | video | channel | playlist | movie
     * @param {string} [options.filters.duration] - filter videos by duration, can be: any | short | medium | long
     * @param {string} [options.filters.sort_by] - filter video results by order, can be: relevance | rating | upload_date | view_count
     *
     * @returns {Promise.<{ query: string; corrected_query: string; estimated_results: number; videos: object[] } |
     * { results: { songs: object[]; videos: object[]; albums: object[]; community_playlists: object[] } }>}
     */
    search(query: string, options?: {
        client?: 'YOUTUBE' | 'YTMUSIC';
        filters?: {
            upload_date?: 'any' | 'last_hour' | 'today' | 'this_week' | 'this_month' | 'this_year';
            type?: 'any' | 'video' | 'channel' | 'playlist' | 'movie';
            duration?: 'any' | 'short' | 'medium' | 'long';
            sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
        };
    }): Promise<{
        query: string;
        corrected_query: string;
        estimated_results: number;
        videos: object[];
    } | {
        results: {
            songs: object[];
            videos: object[];
            albums: object[];
            community_playlists: object[];
        };
    }>;
    /**
     * Retrieves search suggestions for a given query.
     *
     * @param {string} query - the search query.
     * @param {object} [options] - search options.
     * @param {string} [options.client='YOUTUBE'] - client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
     *
     * @returns {Promise.<{ query: string; results: string[] }>}
     */
    getSearchSuggestions(query: string, options?: {
        client?: 'YOUTUBE' | 'YTMUSIC';
    }): Promise<{
        query: string;
        results: string[];
    }>;
    /**
     * Retrieves video info.
     * @param {string} video_id - the video id.
     * @return {Promise.<{ title: string; description: string; thumbnail: []; metadata: object }>}
     */
    getDetails(video_id: string): Promise<{
        title: string;
        description: string;
        thumbnail: [];
        metadata: object;
    }>;
    /**
     * Retrieves comments for a given video.
     *
     * @param {string} video_id - the video id.
     * @param {string} [sort_by] - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
     * @return {Promise.<{ page_count: number; comment_count: number; items: object[]; }>}
     */
    getComments(video_id: string, sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST'): Promise<{
        page_count: number;
        comment_count: number;
        items: object[];
    }>;
    /**
     * Retrieves contents for a given channel. (WIP)
     * @param {string} id - channel id
     * @return {Promise.<{ title: string; description: string; metadata: object; content: object }>}
     */
    getChannel(id: string): Promise<{
        title: string;
        description: string;
        metadata: object;
        content: object;
    }>;
    /**
     * Retrieves watch history.
     * @returns {Promise.<{ items: { date: string; videos: object[] }[] }>}
     */
    getHistory(): Promise<{
        items: {
            date: string;
            videos: object[];
        }[];
    }>;
    /**
     * Retrieves home feed (aka recommendations).
     * @returns {Promise.<{ videos: { id: string; title: string; description: string; channel: string; metadata: object }[] }>}
     */
    getHomeFeed(): Promise<{
        videos: {
            id: string;
            title: string;
            description: string;
            channel: string;
            metadata: object;
        }[];
    }>;
    /**
     * Retrieves trending content.
     * @returns {Promise.<{ now: { content: { title: string; videos: object[]; }[] };
     * music: { getVideos: Promise.<Array.<object>>; }; gaming: { getVideos: Promise.<Array.<object>>; };
     * movies: { getVideos: Promise.<Array.<object>>; } }>}
     */
    getTrending(): Promise<{
        now: {
            content: {
                title: string;
                videos: object[];
            }[];
        };
        music: {
            getVideos: Promise<Array<object>>;
        };
        gaming: {
            getVideos: Promise<Array<object>>;
        };
        movies: {
            getVideos: Promise<Array<object>>;
        };
    }>;
    /**
     * @todo finish this
     * WIP
     */
    getLibrary(): Promise<any>;
    /**
     * Retrieves subscriptions feed.
     * @returns {Promise.<{ items: { date: string; videos: object[] }[] }>}
     */
    getSubscriptionsFeed(): Promise<{
        items: {
            date: string;
            videos: object[];
        }[];
    }>;
    /**
     * Retrieves notifications.
     * @returns {Promise.<{ items: { title: string; sent_time: string; channel_name: string; channel_thumbnail: object; video_thumbnail: object; video_url: string; read: boolean; notification_id: string }[] }>}
     */
    getNotifications(): Promise<{
        items: {
            title: string;
            sent_time: string;
            channel_name: string;
            channel_thumbnail: object;
            video_thumbnail: object;
            video_url: string;
            read: boolean;
            notification_id: string;
        }[];
    }>;
    /**
     * Retrieves unseen notifications count.
     * @returns {Promise.<number>}
     */
    getUnseenNotificationsCount(): Promise<number>;
    /**
     * Retrieves lyrics for a given song if available.
     *
     * @param {string} video_id
     * @returns {Promise.<string>}
     */
    getLyrics(video_id: string): Promise<string>;
    /**
     * Retrieves the contents of a given playlist.
     *
     * @param {string} playlist_id - the id of the playlist.
     * @param {object} options - `YOUTUBE` | `YTMUSIC`
     * @param {string} options.client - client used to parse the playlist, can be: `YTMUSIC` | `YOUTUBE`
     *
     * @returns {Promise.<
     *  { title: string; description: string; total_items: string; last_updated: string; views: string; items: [] } |
     *  { title: string; description: string; total_items: number; duration: string; year: string; items: [] }>}
     */
    getPlaylist(playlist_id: string, options?: {
        client: 'YOUTUBE' | 'YTMUSIC';
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
     * @param {string} video_id - video id
     * @param {object} options - download options.
     * @param {string} options.quality - video quality; 360p, 720p, 1080p, etc...
     * @param {string} options.type - download type, can be: video, audio or videoandaudio
     * @param {string} options.format - file format
     *
     * @returns {Promise.<{ selected_format: object; formats: object[] }>}
     */
    getStreamingData(video_id: string, options?: {
        quality: string;
        type: 'video' | 'audio' | 'videoandaudio';
        format: string;
    }): Promise<{
        selected_format: object;
        formats: object[];
    }>;
    /**
     * Downloads a given video. If you only need the direct download link take a look at {@link getStreamingData}.
     *
     * @param {string} video_id - video id
     * @param {object} options - download options.
     * @param {string} [options.quality] - video quality; 360p, 720p, 1080p, etc...
     * @param {string} [options.type] - download type, can be: video, audio or videoandaudio
     * @param {string} [options.format] - file format
     * @param {object} [options.range] - download range, indicates which bytes should be downloaded.
     * @param {number} options.range.start - the beginning of the range.
     * @param {number} options.range.end - the end of the range.
     *
     * @return {Stream.PassThrough}
     */
    download(video_id: string, options?: {
        quality?: string;
        type?: 'video' | 'audio' | 'videoandaudio';
        format?: string;
        range?: {
            start: number;
            end: number;
        };
    }): Stream.PassThrough;
    #private;
}
import EventEmitter = require("events");
import OAuth = require("./core/OAuth");
import Request = require("./utils/Request");
import Actions = require("./core/Actions");
import AccountManager = require("./core/AccountManager");
import PlaylistManager = require("./core/PlaylistManager");
import InteractionManager = require("./core/InteractionManager");
import Stream = require("stream");
