import Parser from "../../index.js";

import { YTNode } from "../..";

class LiveChatActionPanel extends YTNode {
    static type = 'LiveChatActionPanel';
    constructor(data) {
        super();
        this.id = data.id;
        this.contents = Parser.parse(data.contents);
        this.target_id = data.targetId;
    }
}
export default LiveChatActionPanel;
