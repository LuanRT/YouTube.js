import Text from "./misc/Text.js";

import { YTNode } from "..";

class ThumbnailOverlayInlineUnplayable extends YTNode {
    static #type = Symbol('ThumbnailOverlayInlineUnplayable');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
    }
}
export default ThumbnailOverlayInlineUnplayable;
