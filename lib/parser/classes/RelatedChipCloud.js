import Parser from "../index.js";

import { YTNode } from "..";

class RelatedChipCloud extends YTNode {
    static #type = Symbol('RelatedChipCloud');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
    }
}
export default RelatedChipCloud;
