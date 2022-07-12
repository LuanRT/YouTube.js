import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class ReplaceChatItemAction extends YTNode {
    static [ParserTypeSymbol] = 'ReplaceChatItemAction';
    constructor(data) {
        super();
        this.target_item_id = data.targetItemId;
        this.replacement_item = Parser.parse(data.replacementItem);
    }
}
export default ReplaceChatItemAction;
