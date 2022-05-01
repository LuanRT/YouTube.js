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
    };
}
import NavigationEndpoint = require("./NavigationEndpoint");
