import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class BackstageImage extends YTNode {
    static #type = Symbol('BackstageImage');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.image = Thumbnail.fromResponse(data.image);
    }
}
export default BackstageImage;
