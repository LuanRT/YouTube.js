import Text from "./Text.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class PlaylistInfoCardContent {
    type = 'PlaylistInfoCardContent';
    constructor(data) {
        this.title = new Text(data.playlistTitle);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.video_count = new Text(data.playlistVideoCount);
        this.channel_name = new Text(data.channelName);
        this.endpoint = new NavigationEndpoint(data.action);
    }
}
export default PlaylistInfoCardContent;
