import Text from "../misc/Text.js";

import { YTNode, ParserTypeSymbol } from "../..";

class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
    static [ParserTypeSymbol] = 'MarkChatItemsByAuthorAsDeletedAction';
    constructor(data) {
        super();
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.channel_id = data.externalChannelId;
    }
}
export default MarkChatItemsByAuthorAsDeletedAction;
