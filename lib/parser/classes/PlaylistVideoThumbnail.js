import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class PlaylistVideoThumbnail extends YTNode {
    static #type = Symbol('PlaylistVideoThumbnail');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    }
}
export default PlaylistVideoThumbnail;
