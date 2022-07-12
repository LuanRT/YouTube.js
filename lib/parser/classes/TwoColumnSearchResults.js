import Parser from "../index.js";

import { YTNode } from "..";

class TwoColumnSearchResults extends YTNode {
    static #type = Symbol('TwoColumnSearchResults');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.primary_contents = Parser.parse(data.primaryContents);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
export default TwoColumnSearchResults;
