import Text from "./misc/Text.js";

import { YTNode } from "..";

class TextHeader extends YTNode {
    static #type = Symbol('TextHeader');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.style = data.style;
    }
}
export default TextHeader;
