import Parser from "../../index.js";

import { YTNode } from "../..";

class Menu extends YTNode {
    static #type = Symbol('Menu');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.items = Parser.parse(data.items) || [];
        this.top_level_buttons = Parser.parse(data.topLevelButtons) || [];
        this.label = data.accessibility?.accessibilityData?.label || null;
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default Menu;
