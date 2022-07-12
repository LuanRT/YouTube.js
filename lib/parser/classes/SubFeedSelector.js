import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class SubFeedSelector extends YTNode {
    static #type = Symbol('SubFeedSelector');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.options = Parser.parse(data.options);
    }
}
export default SubFeedSelector;
