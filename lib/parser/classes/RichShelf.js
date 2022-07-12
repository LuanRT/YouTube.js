import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class RichShelf extends YTNode {
    static #type = Symbol('RichShelf');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.contents = Parser.parse(data.contents);
        this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
    }
}
export default RichShelf;
