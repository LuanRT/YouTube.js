import Text from "../../misc/Text.js";
import Thumbnail from "../../Thumbnail.js";
import Parser from "../../../index.js";

class PollHeader {
    static #type = Symbol('PollHeader');
    static get type() { return this.#type }
    constructor(data) {
        this.poll_question = new Text(data.pollQuestion);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.metadata = new Text(data.metadataText);
        this.live_chat_poll_type = data.liveChatPollType;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
    }
}
export default PollHeader;
