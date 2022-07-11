export = VideoInfoCardContent;
declare class VideoInfoCardContent {
    constructor(data: any);
    type: string;
    title: Text;
    channel_name: Text;
    view_count: Text;
    video_thumbnails: Thumbnail[];
    duration: Text;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
