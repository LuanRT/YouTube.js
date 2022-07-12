import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class AppendContinuationItemsAction extends YTNode {
    static [ParserTypeSymbol] = 'AppendContinuationItemsAction';;
    constructor(data) {
        super();
        this.items = Parser.parse(data.continuationItems);
        this.target = data.target;
    }
}
export default AppendContinuationItemsAction;
