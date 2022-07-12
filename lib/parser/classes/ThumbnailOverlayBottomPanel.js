
import { YTNode } from "..";

class ThumbnailOverlayBottomPanel extends YTNode {
    static #type = Symbol('ThumbnailOverlayBottomPanel');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlayBottomPanel;
