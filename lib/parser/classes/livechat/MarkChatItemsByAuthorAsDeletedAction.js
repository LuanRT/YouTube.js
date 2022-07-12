import Text from "../misc/Text.js";

import { YTNode } from "../..";

class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
    static #type = Symbol('MarkChatItemsByAuthorAsDeletedAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.channel_id = data.externalChannelId;
    }
}
export default MarkChatItemsByAuthorAsDeletedAction;
