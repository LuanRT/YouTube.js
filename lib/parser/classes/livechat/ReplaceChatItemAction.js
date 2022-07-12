import Parser from "../../index.js";

import { YTNode } from "../..";

class ReplaceChatItemAction extends YTNode {
    static #type = Symbol('ReplaceChatItemAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.target_item_id = data.targetItemId;
        this.replacement_item = Parser.parse(data.replacementItem);
    }
}
export default ReplaceChatItemAction;
