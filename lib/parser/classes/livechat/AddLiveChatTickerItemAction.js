import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class AddLiveChatTickerItemAction extends YTNode {
    static [ParserTypeSymbol] = 'AddLiveChatTickerItemAction';
    constructor(data) {
        super();
        this.item = Parser.parse(data.item);
        this.duration_sec = data.durationSec;
    }
}
export default AddLiveChatTickerItemAction;
