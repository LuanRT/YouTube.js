export = VideoInfo;
/** Namespace */
declare class VideoInfo {
    /**
     * @param {object} data - API response.
     * @param {import('../../core/Actions')} actions
     * @param {import('../../core/Player')} player
     * @param {string} cpn - Client Playback Nonce
     */
    constructor(data: object, actions: import('../../core/Actions'), player: import('../../core/Player'), cpn: string);
    /**
     * @type {import('../classes/VideoDetails')}
     */
    basic_info: import('../classes/VideoDetails');
    streaming_data: any;
    playability_status: any;
    /**
     * @type {import('../classes/PlayerAnnotationsExpanded')[]}
     */
    annotations: import('../classes/PlayerAnnotationsExpanded')[];
    /**
     * @type {import('../classes/PlayerStoryboardSpec')}
     */
    storyboards: import('../classes/PlayerStoryboardSpec');
    /**
     * @type {import('../classes/Endscreen')}
     */
    endscreen: import('../classes/Endscreen');
    /**
     * @type {import('../classes/PlayerCaptionsTracklist')}
     */
    captions: import('../classes/PlayerCaptionsTracklist');
    /**
     * @type {import('../classes/CardCollection')}
     */
    cards: import('../classes/CardCollection');
    /**
     * @type {import('../classes/VideoPrimaryInfo')}
     */
    primary_info: import('../classes/VideoPrimaryInfo');
    /**
     * @type {import('../classes/VideoSecondaryInfo')}
     */
    secondary_info: import('../classes/VideoSecondaryInfo');
    /**
     * @type {import('../classes/MerchandiseShelf')}
     */
    merchandise: import('../classes/MerchandiseShelf');
    /**
     * @type {import('../classes/ChipCloud')}
     */
    related_chip_cloud: import('../classes/ChipCloud');
    watch_next_feed: any;
    /**
     * @type {import('../classes/PlayerOverlay')}
     */
    player_overlays: import('../classes/PlayerOverlay');
    /**
     * @type {import('../classes/CommentsEntryPointHeader')}
     */
    comments_entry_point_header: any;
    /**
     * @type {import('../classes/LiveChat')}
     */
    livechat: import('../classes/LiveChat');
    /**
     * Applies given filter to the watch next feed.
     *
     * @param {string} name
     * @returns {Promise.<VideoInfo>}
     */
    selectFilter(name: string): Promise<VideoInfo>;
    /** @typedef {import('../classes/CompactVideo')} CompactVideo */
    /** @typedef {import('../classes/CompactMix')} CompactMix */
    /**
     * Retrieves watch next feed continuation.
     *
     * @returns {Promise.<CompactVideo[] | CompactMix[]>}
     */
    getWatchNextContinuation(): Promise<import("../classes/CompactVideo")[] | import("../classes/CompactMix")[]>;
    /**
     * API response.
     *
     * @typedef {{ success: boolean, status_code: number, data: object }} Response
     */
    /**
     * Likes the video.
     *
     * @returns {Promise.<Response>}
     */
    like(): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Dislikes the video.
     *
     * @returns {Promise.<Response>}
     */
    dislike(): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Removes like/dislike.
     *
     * @returns {Promise.<Response>}
     */
    removeLike(): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Retrieves Live Chat if available.
     * @param {string} [mode] - livechat mode
     * @returns {Promise.<LiveChat>}
     */
    getLiveChat(mode?: string): Promise<LiveChat>;
    /** @type {string[]} */
    get filters(): string[];
    get actions(): import("../../core/Actions");
    get page(): any[];
    /**
     * Get songs used in the video.
     */
    get music_tracks(): {}[];
    chooseFormat(options: any): any;
    /**
     *
     * @param {object} options - download options.
     * @param {string} [options.quality] - video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.
     * @param {string} [options.type] - download type, can be: video, audio or videoandaudio
     * @param {string} [options.format] - file format, use 'any' to download any format.
     * @param {object} [options.range] - download range, indicates which bytes should be downloaded.
     * @param {number} options.range.start - the beginning of the range.
     * @param {number} options.range.end - the end of the range.
     * @param {import('stream').PassThrough} [_stream]
     * @returns {import('stream').PassThrough}
     */
    download(options?: {
        quality?: string;
        type?: string;
        format?: string;
        range?: {
            start: number;
            end: number;
        };
    }, _stream?: any): any;
    #private;
}
import LiveChat = require("./LiveChat");
