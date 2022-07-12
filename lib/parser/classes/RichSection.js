import Parser from "../index.js";

import { YTNode } from "..";

class RichSection extends YTNode {
    static #type = Symbol('RichSection');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.contents = Parser.parse(data.content);
    }
}
export default RichSection;
