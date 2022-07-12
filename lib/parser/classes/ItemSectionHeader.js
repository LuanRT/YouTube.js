import Text from "./misc/Text.js";

import { YTNode } from "..";

class ItemSectionHeader extends YTNode {
    static #type = Symbol('ItemSectionHeader');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
export default ItemSectionHeader;
