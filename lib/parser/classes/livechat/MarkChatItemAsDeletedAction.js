import Text from "../Text.js";

class MarkChatItemAsDeletedAction {
    type = 'MarkChatItemAsDeletedAction';
    constructor(data) {
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.target_item_id = data.targetItemId;
    }
}
export default MarkChatItemAsDeletedAction;
