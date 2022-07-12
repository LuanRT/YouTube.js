import Parser from "../../index.js";
import Text from "../misc/Text.js";

import { YTNode } from "../..";

class SimpleMenuHeader extends YTNode {
    static #type = Symbol('SimpleMenuHeader');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.buttons = Parser.parse(data.buttons);
    }
}
export default SimpleMenuHeader;
