import Text from "./misc/Text";
import Thumbnail from "./misc/Thumbnail";
import NavigationEndpoint from "./NavigationEndpoint";

import { YTNode } from "../helpers";

class VideoInfoCardContent extends YTNode {
    static type = 'VideoInfoCardContent';
    constructor(data) {
        super();
        this.title = new Text(data.videoTitle);
        this.channel_name = new Text(data.channelName);
        this.view_count = new Text(data.viewCountText);
        this.video_thumbnails = Thumbnail.fromResponse(data.videoThumbnail);
        this.duration = new Text(data.lengthString);
        this.endpoint = new NavigationEndpoint(data.action);
    }
}
export default VideoInfoCardContent;
