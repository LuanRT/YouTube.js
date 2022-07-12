import Text from "./misc/Text.js";

import { YTNode } from "..";

class SimpleCardTeaser extends YTNode {
    static #type = Symbol('SimpleCardTeaser');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.message = new Text(data.message);
        this.prominent = data.prominent;
    }
}
export default SimpleCardTeaser;
