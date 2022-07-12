import Text from "./misc/Text.js";

import { YTNode } from "..";

class ThumbnailOverlayNowPlaying extends YTNode {
    static #type = Symbol('ThumbnailOverlayNowPlaying');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.text = new Text(data.text).text;
    }
}
export default ThumbnailOverlayNowPlaying;
