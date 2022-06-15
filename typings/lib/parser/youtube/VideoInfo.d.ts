export = VideoInfo;
/** namespace */
declare class VideoInfo {
    /**
     * @param {object} data - API response.
     * @param {import('../../core/Actions')} actions
     * @param {import('../../core/Player')} player
     */
    constructor(data: object, actions: import('../../core/Actions'), player: import('../../core/Player'));
    /**
     * @type {import('../contents/classes/VideoDetails')}
     */
    basic_info: import('../contents/classes/VideoDetails');
    /**
     * @type {import('../contents/classes/VideoPrimaryInfo')}
     */
    primary_info: import('../contents/classes/VideoPrimaryInfo');
    /**
     * @type {import('../contents/classes/VideoSecondaryInfo')}
     */
    secondary_info: import('../contents/classes/VideoSecondaryInfo');
    /**
     * @type {import('../contents/classes/MerchandiseShelf')}
     */
    merchandise: import('../contents/classes/MerchandiseShelf');
    /**
     * @type {import('../contents/classes/ChipCloud')}
     */
    related_chip_cloud: import('../contents/classes/ChipCloud');
    watch_next_feed: any;
    /**
     * @type {import('../contents/classes/PlayerOverlay')}
     */
    player_overlays: import('../contents/classes/PlayerOverlay');
    streaming_data: {
        expires: Date;
        formats: import("../contents/classes/Format")[];
        adaptive_formats: import("../contents/classes/Format")[];
        dash_manifest_url: any;
        dls_manifest_url: any;
    };
    playability_status: {
        status: number;
        error_screen: any;
        embeddable: boolean;
        reason: string;
    };
    /**
     * @type {import('../contents/classes/PlayerAnnotationsExpanded')[]}
     */
    annotations: import('../contents/classes/PlayerAnnotationsExpanded')[];
    /**
     * @type {import('../contents/classes/PlayerStoryboardSpec')}
     */
    storyboards: import('../contents/classes/PlayerStoryboardSpec');
    /**
     * @type {import('../contents/classes/Endscreen')}
     */
    endscreen: import('../contents/classes/Endscreen');
    /**
     * @type {import('../contents/classes/PlayerCaptionsTracklist')}
     */
    captions: import('../contents/classes/PlayerCaptionsTracklist');
    /**
     * @type {import('../contents/classes/CardCollection')}
     */
    cards: import('../contents/classes/CardCollection');
    /**
     * @type {import('../contents/classes/CommentsEntryPointHeader')}
     */
    comments_entry_point_header: import('../contents/classes/CommentsEntryPointHeader');
    /**
     * Applies given filter to the watch next feed.
     *
     * @param {string} name
     * @returns {Promise.<VideoInfo>}
     */
    selectFilter(name: string): Promise<VideoInfo>;
    /** @typedef {import('../contents/classes/CompactVideo')} CompactVideo */
    /** @typedef {import('../contents/classes/CompactMix')} CompactMix */
    /**
     * Retrieves watch next feed continuation.
     *
     * @returns {Promise.<CompactVideo[] | CompactMix[]>}
     */
    getWatchNextContinuation(): Promise<import("../contents/classes/CompactVideo")[] | import("../contents/classes/CompactMix")[]>;
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
    /** @type {string[]} */
    get filters(): string[];
    get page(): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        on_response_received_commands: any;
        continuation_contents: any;
        metadata: any;
        header: any;
        microformat: import("../contents/classes/PlayerMicroformat");
        sidebar: any;
        overlay: any;
        refinements: any;
        estimated_results: any;
        player_overlays: any;
        playability_status: {
            status: number;
            error_screen: any;
            embeddable: boolean;
            reason: string;
        };
        streaming_data: {
            expires: Date;
            formats: import("../contents/classes/Format")[];
            adaptive_formats: import("../contents/classes/Format")[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        };
        captions: any;
        video_details: import("../contents/classes/VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: import("../contents/classes/Endscreen");
        cards: import("../contents/classes/CardCollection");
    }[];
    #private;
}
