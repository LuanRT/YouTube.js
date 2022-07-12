import Text from "./misc/Text.js";
import Parser from "../index.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class LiveChatMessageInput extends YTNode {
    static [ParserTypeSymbol] = 'LiveChatMessageInput';
    constructor(data) {
        super();
        this.author_name = new Text(data.authorName);
        this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
        this.send_button = Parser.parse(data.sendButton);
        this.target_id = data.targetId;
    }
}
export default LiveChatMessageInput;
