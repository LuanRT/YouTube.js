import LiveChatTextMessage from "./LiveChatTextMessage.js";
import Parser from "../../../index.js";

class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
    static #type = Symbol('LiveChatViewerEngagementMessage');
    static get type() { return this.#type }
    constructor(data) {
        super(data);
        delete this.author;
        delete this.menu_endpoint;
        this.icon_type = data.icon.iconType;
        this.action_button = Parser.parse(data.actionButton);
    }
}
export default LiveChatViewerEngagementMessage;
