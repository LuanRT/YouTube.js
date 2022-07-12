import Text from "./misc/Text.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class PlaylistInfoCardContent extends YTNode {
    static #type = Symbol('PlaylistInfoCardContent');
    static get type() { return this.#type }
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
