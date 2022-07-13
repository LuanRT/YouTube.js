import Text from "../misc/Text.js";

import { YTNode } from "../../helpers";

class MarkChatItemAsDeletedAction extends YTNode {
    static type = 'MarkChatItemAsDeletedAction';
    constructor(data) {
        super();
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.target_item_id = data.targetItemId;
    }
}
export default MarkChatItemAsDeletedAction;
