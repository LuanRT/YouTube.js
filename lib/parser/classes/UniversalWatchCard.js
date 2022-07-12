import Parser from "../index.js";

import { YTNode } from "..";

class UniversalWatchCard extends YTNode {
    static #type = Symbol('UniversalWatchCard');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
        this.call_to_action = Parser.parse(data.callToAction);
        this.sections = Parser.parse(data.sections);
    }
}
export default UniversalWatchCard;
