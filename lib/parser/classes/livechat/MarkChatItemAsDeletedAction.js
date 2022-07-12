import Text from "../misc/Text.js";

import { YTNode } from "../..";

class MarkChatItemAsDeletedAction extends YTNode {
    static #type = Symbol('MarkChatItemAsDeletedAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.target_item_id = data.targetItemId;
    }
}
export default MarkChatItemAsDeletedAction;
