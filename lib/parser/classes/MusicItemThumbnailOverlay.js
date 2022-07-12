import Parser from "../index.js";

import { YTNode } from "..";

class MusicItemThumbnailOverlay extends YTNode {
    static #type = Symbol('MusicItemThumbnailOverlay');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
        this.content_position = data.contentPosition;
        this.display_style = data.displayStyle;
    }
}
export default MusicItemThumbnailOverlay;
