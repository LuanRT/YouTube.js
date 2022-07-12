import Parser from "../index.js";

import { YTNode } from "..";

class Grid extends YTNode {
    static #type = Symbol('Grid');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
        this.is_collapsible = data.isCollapsible;
        this.visible_row_count = data.visibleRowCount;
        this.target_id = data.targetId;
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default Grid;
