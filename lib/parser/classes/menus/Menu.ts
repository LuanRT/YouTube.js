import Parser from "../../index.js";

import { YTNode } from "../..";
import { observe } from "../../../utils/Utils.js";

class Menu extends YTNode {
    static type = 'Menu';
    items;
    top_level_buttons;
    label;
    constructor(data: any) {
        super();
        this.items = Parser.parse(data.items, true) || observe([] as YTNode[]);
        this.top_level_buttons = Parser.parse(data.topLevelButtons, true) || observe([] as YTNode[]);
        this.label = data.accessibility?.accessibilityData?.label || null;
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default Menu;
