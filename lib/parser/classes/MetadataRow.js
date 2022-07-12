import Text from "./misc/Text.js";

import { YTNode } from "..";

class MetadataRow extends YTNode {
    static #type = Symbol('MetadataRow');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.contents = data.contents.map((content) => new Text(content));
    }
}
export default MetadataRow;
