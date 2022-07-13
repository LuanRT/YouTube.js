import Thumbnail from "./misc/Thumbnail.js";

import { YTNode } from "../helpers";

class MovingThumbnail extends YTNode {
    static type = 'MovingThumbnail';
    constructor(data) {
        super();
        return data.movingThumbnailDetails?.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
    }
}
export default MovingThumbnail;
