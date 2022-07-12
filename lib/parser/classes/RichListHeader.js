import Text from "./misc/Text.js";

import { YTNode } from "..";

class RichListHeader extends YTNode {
    static #type = Symbol('RichListHeader');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.icon_type = data.icon.iconType;
    }
}
export default RichListHeader;
