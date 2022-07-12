import Text from "./misc/Text.js";

import { YTNode } from "..";

class ThumbnailOverlayLoadingPreview extends YTNode {
    static #type = Symbol('ThumbnailOverlayLoadingPreview');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.text = new Text(data.text);
    }
}
export default ThumbnailOverlayLoadingPreview;
