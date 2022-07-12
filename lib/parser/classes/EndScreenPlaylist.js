import Text from "./misc/Text.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class EndScreenPlaylist extends YTNode {
    static [ParserTypeSymbol] = 'EndScreenPlaylist';
    constructor(data) {
        super();
        this.id = data.playlistId;
        this.title = new Text(data.title);
        this.author = new Text(data.longBylineText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.video_count = new Text(data.videoCountText);
    }
}
export default EndScreenPlaylist;
