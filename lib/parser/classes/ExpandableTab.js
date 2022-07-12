import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class ExpandableTab extends YTNode {
    static #type = Symbol('ExpandableTab');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = data.title;
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.selected = data.selected; // If this.selected then we may have content else we do not
        this.content = data.content ? Parser.parse(data.content) : null;
    }
}
export default ExpandableTab;
