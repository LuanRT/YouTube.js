export = PlayerAnnotationsExpanded;
declare class PlayerAnnotationsExpanded {
    constructor(data: any);
    type: string;
    featured_channel: {
        start_time_ms: any;
        end_time_ms: any;
        watermark: Thumbnail[];
        channel_name: any;
        endpoint: NavigationEndpoint;
        subscribe_button: any;
    };
    allow_swipe_dismiss: any;
    annotation_id: any;
}
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
