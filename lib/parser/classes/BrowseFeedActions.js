import Parser from "../index.js";

import { YTNode } from "..";

class BrowseFeedActions extends YTNode {
    static #type = Symbol('BrowseFeedActions');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default BrowseFeedActions;
