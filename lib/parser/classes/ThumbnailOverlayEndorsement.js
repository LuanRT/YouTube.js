import Text from "./misc/Text.js";

import { YTNode } from "..";

class ThumbnailOverlayEndorsement extends YTNode {
    static #type = Symbol('ThumbnailOverlayEndorsement');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
    }
}
export default ThumbnailOverlayEndorsement;
