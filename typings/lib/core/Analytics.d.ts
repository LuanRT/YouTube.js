export = Analytics;
/** @namespace */
declare class Analytics {
    /**
     * @param {object} response - API response.
     * @constructor
     */
    constructor(response: object);
    sections: any;
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
    };
    #private;
}
