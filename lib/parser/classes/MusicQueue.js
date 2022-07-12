import Parser from "../index.js";

import { YTNode } from "..";

class MusicQueue extends YTNode {
    static #type = Symbol('MusicQueue');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
    }
}
export default MusicQueue;
