import Text from "../../misc/Text";
import Thumbnail from "../../misc/Thumbnail";
import Parser from "../../../index";

import { YTNode } from "../../../helpers"; 
class PollHeader extends YTNode {
    static type = 'PollHeader';
    constructor(data) {
        super();
        this.poll_question = new Text(data.pollQuestion);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.metadata = new Text(data.metadataText);
        this.live_chat_poll_type = data.liveChatPollType;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
    }
}
export default PollHeader;
