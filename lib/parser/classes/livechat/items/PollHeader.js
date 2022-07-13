import Text from "../../misc/Text.js";
import Thumbnail from "../../misc/Thumbnail.js";
import Parser from "../../../index.js";

import { YTNode } from "../../../helpers"; 
class PollHeader extends YTNode {
    static type = 'PollHeader';
    constructor(data) {
        this.poll_question = new Text(data.pollQuestion);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.metadata = new Text(data.metadataText);
        this.live_chat_poll_type = data.liveChatPollType;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
    }
}
export default PollHeader;
