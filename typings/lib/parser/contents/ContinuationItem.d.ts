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
        metadata: any;
        header: any;
        microformat: any;
        sidebar: any;
        playability_status: {
            status: any;
            embeddable: any;
        };
        streaming_data: {
            expires: Date;
            formats: import("./Format")[];
            adaptive_formats: import("./Format")[];
        };
        captions: any;
        video_details: import("./VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: any;
        cards: any;
    };
}
import NavigationEndpoint = require("./NavigationEndpoint");
