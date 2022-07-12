import Parser from "../../index.js";

import { YTNode } from "../..";

class AddLiveChatTickerItemAction extends YTNode {
    static #type = Symbol('AddLiveChatTickerItemAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.item = Parser.parse(data.item);
        this.duration_sec = data.durationSec;
    }
}
export default AddLiveChatTickerItemAction;
