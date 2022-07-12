import Button from "../Button.js";

import { YTNode } from "../..";

class MenuServiceItem extends Button extends YTNode {
    static #type = Symbol('MenuServiceItem');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
    }
}
export default MenuServiceItem;
