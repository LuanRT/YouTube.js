import Parser from "../index.js";

import { YTNode } from "..";

class HorizontalList extends YTNode {
    static #type = Symbol('HorizontalList');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.visible_item_count = data.visibleItemCount;
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default HorizontalList;
