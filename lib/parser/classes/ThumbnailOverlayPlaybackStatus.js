import Text from "./misc/Text.js";

import { YTNode } from "..";

class ThumbnailOverlayPlaybackStatus extends YTNode {
    static #type = Symbol('ThumbnailOverlayPlaybackStatus');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.text = data.texts.map((text) => new Text(text))[0].toString();
    }
}
export default ThumbnailOverlayPlaybackStatus;
