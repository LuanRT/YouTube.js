export = MarkChatItemAsDeletedAction;
declare class MarkChatItemAsDeletedAction {
    constructor(data: any);
    type: string;
    deleted_state_message: Text;
    target_item_id: any;
}
import Text = require("../Text");
