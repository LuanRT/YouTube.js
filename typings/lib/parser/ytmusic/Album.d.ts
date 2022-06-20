export = Album;
/** @namespace */
declare class Album {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    /** @type {import('../contents/classes/MusicDetailHeader')[]} */
    header: import('../contents/classes/MusicDetailHeader')[];
    /** @type {string} */
    url: string;
    /** @type {import('../contents/classes/MusicResponsiveListItem')[]} */
    contents: import('../contents/classes/MusicResponsiveListItem')[];
    get page(): {
        contents: any;
        contents_memo: Map<any, any>;
        on_response_received_actions: any;
        on_response_received_actions_memo: Map<any, any>;
        on_response_received_endpoints: any;
        on_response_received_endpoints_memo: Map<any, any>;
        on_response_received_commands: any;
        on_response_received_commands_memo: Map<any, any>;
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
    };
    #private;
}
