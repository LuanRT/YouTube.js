import Text from "./misc/Text";
import Thumbnail from "./misc/Thumbnail";
import NavigationEndpoint from "./NavigationEndpoint";

import { YTNode } from "../helpers";

class PlaylistInfoCardContent extends YTNode {
    static type = 'PlaylistInfoCardContent';
    constructor(data) {
        super();
        this.title = new Text(data.playlistTitle);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.video_count = new Text(data.playlistVideoCount);
        this.channel_name = new Text(data.channelName);
        this.endpoint = new NavigationEndpoint(data.action);
    }
}
export default PlaylistInfoCardContent;
