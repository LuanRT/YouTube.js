export = VideoInfo;
/** namespace **/
declare class VideoInfo {
    /**
     * @param {object} data - API response.
     * @param {import('./Actions')} actions
     * @param {import('./Player')} player
     * @constructor
     */
    constructor(data: object, actions: import('./Actions'), player: import('./Player'));
    /**
     * @type {import('../parser/contents/classes/VideoDetails')}
     */
    basic_info: import('../parser/contents/classes/VideoDetails');
    /**
     * @type {import('../parser/contents/classes/VideoPrimaryInfo')}
     */
    primary_info: import('../parser/contents/classes/VideoPrimaryInfo');
    /**
     * @type {import('../parser/contents/classes/VideoSecondaryInfo')}
     */
    secondary_info: import('../parser/contents/classes/VideoSecondaryInfo');
    /**
     * @type {import('../parser/contents/classes/PlayerOverlay')}
     */
    player_overlays: import('../parser/contents/classes/PlayerOverlay');
    streaming_data: {
        expires: Date;
        formats: import("../parser/contents/classes/Format")[];
        adaptive_formats: import("../parser/contents/classes/Format")[];
        dash_manifest_url: any;
        dls_manifest_url: any;
    };
    playability_status: {
        /**
         * @type {import('../parser/contents/classes/VideoPrimaryInfo')}
         */
        status: number;
        embeddable: boolean;
        reason: string;
    };
    /**
     * @type {import('../parser/contents/classes/PlayerAnnotationsExpanded')[]}
     */
    annotations: import('../parser/contents/classes/PlayerAnnotationsExpanded')[];
    /**
     * @type {import('../parser/contents/classes/PlayerStoryboardSpec')}
     */
    storyboards: import('../parser/contents/classes/PlayerStoryboardSpec');
    /**
     * @type {import('../parser/contents/classes/Endscreen')}
     */
    endscreen: import('../parser/contents/classes/Endscreen');
    /**
     * @type {import('../parser/contents/classes/CardCollection')}
     */
    cards: import('../parser/contents/classes/CardCollection');
    /**
     * @type {import('../parser/contents/classes/CommentsEntryPointHeader')}
     */
    comments_entry_point_header: import('../parser/contents/classes/CommentsEntryPointHeader');
    get page(): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        metadata: any;
        header: any;
        microformat: import("../parser/contents/classes/PlayerMicroformat");
        sidebar: any;
        overlay: any;
        refinements: any;
        estimated_results: any;
        player_overlays: any;
        playability_status: {
            /**
             * @type {import('../parser/contents/classes/VideoPrimaryInfo')}
             */
            status: number;
            embeddable: boolean;
            reason: string;
        };
        streaming_data: {
            expires: Date;
            formats: import("../parser/contents/classes/Format")[];
            adaptive_formats: import("../parser/contents/classes/Format")[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        };
        captions: any;
        video_details: import("../parser/contents/classes/VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: import("../parser/contents/classes/Endscreen");
        cards: import("../parser/contents/classes/CardCollection");
    }[];
    #private;
}
