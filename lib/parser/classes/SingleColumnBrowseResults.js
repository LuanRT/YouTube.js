import Parser from "../index.js";

import { YTNode } from "..";

class SingleColumnBrowseResults extends YTNode {
    static #type = Symbol('SingleColumnBrowseResults');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
    }
}
export default SingleColumnBrowseResults;
