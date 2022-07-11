export = PollHeader;
declare class PollHeader {
    constructor(data: any);
    type: string;
    poll_question: Text;
    thumbnails: Thumbnail[];
    metadata: Text;
    live_chat_poll_type: any;
    context_menu_button: any;
}
import Text = require("../../Text");
import Thumbnail = require("../../Thumbnail");
