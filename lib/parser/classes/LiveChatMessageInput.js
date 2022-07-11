import Text from "./Text.js";
import Parser from "../index.js";
import Thumbnail from "./Thumbnail.js";

class LiveChatMessageInput {
    constructor(data) {
        this.author_name = new Text(data.authorName);
        this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
        this.send_button = Parser.parse(data.sendButton);
        this.target_id = data.targetId;
    }
}
export default LiveChatMessageInput;
