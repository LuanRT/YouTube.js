import Text from "./Text.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class VideoInfoCardContent {
    type = 'VideoInfoCardContent';
    constructor(data) {
        this.title = new Text(data.videoTitle);
        this.channel_name = new Text(data.channelName);
        this.view_count = new Text(data.viewCountText);
        this.video_thumbnails = Thumbnail.fromResponse(data.videoThumbnail);
        this.duration = new Text(data.lengthString);
        this.endpoint = new NavigationEndpoint(data.action);
    }
}
export default VideoInfoCardContent;
