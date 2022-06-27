export = MarkChatItemsByAuthorAsDeletedAction;
declare class MarkChatItemsByAuthorAsDeletedAction {
    constructor(data: any);
    type: string;
    deleted_state_message: Text;
    channel_id: any;
}
import Text = require("../Text");
