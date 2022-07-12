import Parser from "../index.js";

import { YTNode } from "..";

class MusicHeader extends YTNode {
    static #type = Symbol('MusicHeader');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
    }
}
export default MusicHeader;
