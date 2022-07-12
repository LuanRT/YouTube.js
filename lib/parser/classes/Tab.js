import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class Tab extends YTNode {
    static #type = Symbol('Tab');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = data.title || 'N/A';
        this.selected = data.selected || false;
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.content = Parser.parse(data.content);
    }
}
export default Tab;
