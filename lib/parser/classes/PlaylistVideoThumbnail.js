import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class PlaylistVideoThumbnail extends YTNode {
    static type = 'PlaylistVideoThumbnail';
    constructor(data) {
        super();
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    }
}
export default PlaylistVideoThumbnail;
