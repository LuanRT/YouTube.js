export = LiveChatBannerPoll;
declare class LiveChatBannerPoll {
    constructor(data: any);
    type: string;
    poll_question: Text;
    author_photo: Thumbnail[];
    choices: any;
    collapsed_state_entity_key: any;
    live_chat_poll_state_entity_key: any;
    context_menu_button: any;
}
import Text = require("../../Text");
import Thumbnail = require("../../Thumbnail");
