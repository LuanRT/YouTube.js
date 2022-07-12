import Text from "./misc/Text.js";

import { YTNode } from "..";

class ThumbnailOverlaySidePanel extends YTNode {
    static #type = Symbol('ThumbnailOverlaySidePanel');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.text = new Text(data.text);
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlaySidePanel;
