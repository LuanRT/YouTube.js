import LiveChatTextMessage from "./LiveChatTextMessage.js";
import Parser from "../../../index.js";

import { YTNode } from "../../.."; 
class LiveChatViewerEngagementMessage extends LiveChatTextMessage extends YTNode {
    static type = 'LiveChatViewerEngagementMessage';
    constructor(data) {
        super(data);
        delete this.author;
        delete this.menu_endpoint;
        this.icon_type = data.icon.iconType;
        this.action_button = Parser.parse(data.actionButton);
    }
}
export default LiveChatViewerEngagementMessage;
