import Thumbnail from "./misc/Thumbnail.js";

import { YTNode } from "../helpers";

class MusicThumbnail extends YTNode {
    static type = 'MusicThumbnail';
    constructor(data) {
        super();
        return Thumbnail.fromResponse(data.thumbnail);
    }
}
export default MusicThumbnail;
