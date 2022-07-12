import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class PlaylistVideoThumbnail extends YTNode {
    static [ParserTypeSymbol] = 'PlaylistVideoThumbnail';
    constructor(data) {
        super();
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    }
}
export default PlaylistVideoThumbnail;
