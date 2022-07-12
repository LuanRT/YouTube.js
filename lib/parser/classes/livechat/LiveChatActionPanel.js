import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class LiveChatActionPanel extends YTNode {
    static [ParserTypeSymbol] = 'LiveChatActionPanel';
    constructor(data) {
        super();
        this.id = data.id;
        this.contents = Parser.parse(data.contents);
        this.target_id = data.targetId;
    }
}
export default LiveChatActionPanel;
