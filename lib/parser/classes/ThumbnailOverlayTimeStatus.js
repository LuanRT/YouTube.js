import Text from "./misc/Text.js";

import { YTNode } from "..";

class ThumbnailOverlayTimeStatus extends YTNode {
    static #type = Symbol('ThumbnailOverlayTimeStatus');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.text = new Text(data.text).text;
    }
}
export default ThumbnailOverlayTimeStatus;
