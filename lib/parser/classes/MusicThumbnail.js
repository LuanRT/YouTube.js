import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class MusicThumbnail extends YTNode {
    static type = 'MusicThumbnail';
    constructor(data) {
        super();
        return Thumbnail.fromResponse(data.thumbnail);
    }
}
export default MusicThumbnail;
