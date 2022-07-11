import Text from "./Text.js";

class ChannelVideoPlayer {
    type = 'ChannelVideoPlayer';
    constructor(data) {
        this.id = data.videoId;
        this.title = new Text(data.title, '');
        this.description = new Text(data.description, '');
        this.views = new Text(data.viewCountText, '');
        this.published_at = new Text(data.publishedTimeText, '');
    }
}
export default ChannelVideoPlayer;
