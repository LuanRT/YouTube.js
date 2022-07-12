
import { YTNode } from "..";

class ThumbnailOverlayPinking extends YTNode {
    static #type = Symbol('ThumbnailOverlayPinking');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.hack = data.hack;
    }
}
export default ThumbnailOverlayPinking;
