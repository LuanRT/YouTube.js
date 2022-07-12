import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ChannelVideoPlayer extends YTNode {
    static [ParserTypeSymbol] = 'ChannelVideoPlayer';
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text(data.title, '');
        this.description = new Text(data.description, '');
        this.views = new Text(data.viewCountText, '');
        this.published_at = new Text(data.publishedTimeText, '');
    }
}
export default ChannelVideoPlayer;
