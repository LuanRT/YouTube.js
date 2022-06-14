export = ContinuationItem;
declare class ContinuationItem {
    constructor(item: any);
    type: string;
    is_resolved: boolean;
    is_rejected: boolean;
    pending_promise: any;
    endpoint: NavigationEndpoint;
    call(session: any): Promise<ContinuationItem>;
    response: {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        on_response_received_commands: any;
        continuation_contents: any;
        metadata: any;
        header: any;
        microformat: import("./classes/PlayerMicroformat");
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
            formats: import("./classes/Format")[];
            adaptive_formats: import("./classes/Format")[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        };
        captions: any;
        video_details: import("./classes/VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: import("./classes/Endscreen");
        cards: import("./classes/CardCollection");
    };
}
import NavigationEndpoint = require("./NavigationEndpoint");
