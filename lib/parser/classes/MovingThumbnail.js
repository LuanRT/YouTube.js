import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class MovingThumbnail extends YTNode {
    static #type = Symbol('MovingThumbnail');
    static get type() { return this.#type }
    constructor(data) {
        super();
        return data.movingThumbnailDetails?.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
    }
}
export default MovingThumbnail;
