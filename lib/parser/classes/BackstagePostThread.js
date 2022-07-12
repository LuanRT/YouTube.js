import Parser from "../index.js";

import { YTNode } from "..";

class BackstagePostThread extends YTNode {
    static #type = Symbol('BackstagePostThread');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.post = Parser.parse(data.post);
    }
}
export default BackstagePostThread;
