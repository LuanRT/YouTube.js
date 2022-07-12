import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class MultiPageMenuNotificationSection extends YTNode {
    static [ParserTypeSymbol] = 'MultiPageMenuNotificationSection';
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
    }
    get contents() {
        return this.items;
    }
}
export default MultiPageMenuNotificationSection;
