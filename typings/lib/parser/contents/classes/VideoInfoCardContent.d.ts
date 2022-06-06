export = VideoInfoCardContent;
declare class VideoInfoCardContent {
    constructor(data: any);
    type: string;
    title: Text;
    channel_name: Text;
    view_count: Text;
    video_thumbnails: any;
    duration: Text;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
