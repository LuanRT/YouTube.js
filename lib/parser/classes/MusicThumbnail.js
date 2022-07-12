import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class MusicThumbnail extends YTNode {
    static #type = Symbol('MusicThumbnail');
    static get type() { return this.#type }
    constructor(data) {
        super();
        return Thumbnail.fromResponse(data.thumbnail);
    }
}
export default MusicThumbnail;
