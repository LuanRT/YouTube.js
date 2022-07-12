import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class SingleHeroImage extends YTNode {
    static #type = Symbol('SingleHeroImage');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
        this.style = data.style;
    }
}
export default SingleHeroImage;
