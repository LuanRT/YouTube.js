import Parser from "../index.js";

import { YTNode } from "..";

class FeedFilterChipBar extends YTNode {
    static #type = Symbol('FeedFilterChipBar');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default FeedFilterChipBar;
