import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class CompactLink extends YTNode {
    static #type = Symbol('CompactLink');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title).toString();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.style = data.style;
    }
}
export default CompactLink;
