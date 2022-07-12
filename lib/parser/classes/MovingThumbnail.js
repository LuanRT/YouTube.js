import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class MovingThumbnail extends YTNode {
    static [ParserTypeSymbol] = 'MovingThumbnail';
    constructor(data) {
        super();
        return data.movingThumbnailDetails?.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
    }
}
export default MovingThumbnail;
