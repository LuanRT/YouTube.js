export = LiveChatMessageInput;
declare class LiveChatMessageInput {
    constructor(data: any);
    author_name: Text;
    author_photo: Thumbnail[];
    send_button: any;
    target_id: any;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
