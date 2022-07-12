import Parser from "../index.js";

import { YTNode } from "..";

class WatchCardSectionSequence extends YTNode {
    static #type = Symbol('WatchCardSectionSequence');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.lists = Parser.parse(data.lists);
    }
}
export default WatchCardSectionSequence;
