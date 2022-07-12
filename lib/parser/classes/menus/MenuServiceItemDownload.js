import NavigationEndpoint from "../NavigationEndpoint.js";

import { YTNode } from "../..";

class MenuServiceItemDownload extends YTNode {
    static #type = Symbol('MenuServiceItemDownload');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.has_separator = data.hasSeparator;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
    }
}
export default MenuServiceItemDownload;
