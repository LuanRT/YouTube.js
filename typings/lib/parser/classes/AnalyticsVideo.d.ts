export = AnalyticsVideo;
declare class AnalyticsVideo {
    constructor(data: any);
    type: string;
    title: any;
    metadata: {
        views: any;
        published: any;
        thumbnails: Thumbnail[];
        duration: any;
        is_short: any;
    };
}
import Thumbnail = require("./Thumbnail");
