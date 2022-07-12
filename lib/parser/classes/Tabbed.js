import Parser from "../index.js";

import { YTNode } from "..";

class Tabbed extends YTNode {
    static #type = Symbol('Tabbed');
    static get type() { return this.#type }
    constructor(data) {
        super();
        return Parser.parse(data);
    }
}
export default Tabbed;
