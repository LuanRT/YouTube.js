import Text from "./misc/Text.js";

import { YTNode } from "..";

class ChannelMobileHeader extends YTNode {
    static #type = Symbol('ChannelMobileHeader');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
export default ChannelMobileHeader;
