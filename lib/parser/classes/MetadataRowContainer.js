import Parser from "../index.js";

import { YTNode } from "..";

class MetadataRowContainer extends YTNode {
    static #type = Symbol('MetadataRowContainer');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.rows = Parser.parse(data.rows);
        this.collapsed_item_count = data.collapsedItemCount;
    }
}
export default MetadataRowContainer;
