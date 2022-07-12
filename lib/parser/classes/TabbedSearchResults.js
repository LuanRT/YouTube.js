import Parser from "../index.js";

import { YTNode } from "..";

class TabbedSearchResults extends YTNode {
    static #type = Symbol('TabbedSearchResults');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
    }
}
export default TabbedSearchResults;
