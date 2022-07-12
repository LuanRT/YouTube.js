import Text from "./misc/Text.js";
import Parser from "../index.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class LiveChatMessageInput extends YTNode {
    static type = 'LiveChatMessageInput';
    constructor(data) {
        super();
        this.author_name = new Text(data.authorName);
        this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
        this.send_button = Parser.parse(data.sendButton);
        this.target_id = data.targetId;
    }
}
export default LiveChatMessageInput;
