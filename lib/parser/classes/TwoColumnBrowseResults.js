import Parser from "../index.js";

import { YTNode } from "..";

class TwoColumnBrowseResults extends YTNode {
    static #type = Symbol('TwoColumnBrowseResults');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
export default TwoColumnBrowseResults;
