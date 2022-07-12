import Button from "../Button.js";

import { YTNode } from "../..";

class MenuNavigationItem extends Button extends YTNode {
    static #type = Symbol('MenuNavigationItem');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
    }
}
export default MenuNavigationItem;
