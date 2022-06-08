export = VideoInfo;
/** namespace **/
declare class VideoInfo {
    /**
     * @param {object} data - API response.
     * @param {import('./Actions')} actions
     * @param {import('./Player')} player
     * @constructor
     */
    constructor(data: object, actions: any, player: any);
    /**
     * @type {import('../parser/contents/classes/VideoDetails')}
     */
    basic_info: any;
    /**
     * @type {import('../parser/contents/classes/VideoPrimaryInfo')}
     */
    primary_info: any;
    /**
     * @type {import('../parser/contents/classes/VideoSecondaryInfo')}
     */
    secondary_info: any;
    /**
     * @type {import('../parser/contents/classes/ChipCloud')}
     */
    related_chip_cloud: any;
    watch_next_feed: any;
    /**
     * @type {import('../parser/contents/classes/PlayerOverlay')}
     */
    player_overlays: any;
    streaming_data: {
        expires: Date;
        formats: import("../contents/classes/Format")[];
        adaptive_formats: import("../contents/classes/Format")[];
        dash_manifest_url: any;
        dls_manifest_url: any;
    };
    playability_status: {
        status: number;
        embeddable: boolean;
        reason: string; /**
         * @type {import('../parser/contents/classes/ChipCloud')}
         */
    };
    /**
     * @type {import('../parser/contents/classes/PlayerAnnotationsExpanded')[]}
     */
    annotations: any[];
    /**
     * @type {import('../parser/contents/classes/PlayerStoryboardSpec')}
     */
    storyboards: any;
    /**
     * @type {import('../parser/contents/classes/Endscreen')}
     */
    endscreen: any;
    /**
     * @type {import('../parser/contents/classes/PlayerCaptionsTracklist')}
     */
    captions: any;
    /**
     * @type {import('../parser/contents/classes/CardCollection')}
     */
    cards: any;
    /**
     * @type {import('../parser/contents/classes/CommentsEntryPointHeader')}
     */
    comments_entry_point_header: any;
    get page(): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        on_response_received_commands: any;
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
            embeddable: boolean;
            reason: string; /**
             * @type {import('../parser/contents/classes/ChipCloud')}
             */
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
