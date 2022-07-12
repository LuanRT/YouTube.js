import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class DownloadButton extends YTNode {
    static #type = Symbol('DownloadButton');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.style = data.style;
        this.size = data.size;
        this.endpoint = new NavigationEndpoint(data.command);
        this.target_id = data.targetId;
    }
}
export default DownloadButton;
