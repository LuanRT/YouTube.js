import Parser from "../index.js";

import { YTNode } from "..";

class RichItem extends YTNode {
    static #type = Symbol('RichItem');
    static get type() { return this.#type }
    constructor(data) {
        super();
        return Parser.parse(data.content);
    }
}
export default RichItem;
