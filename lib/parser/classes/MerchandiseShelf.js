import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class MerchandiseShelf extends YTNode {
    static [ParserTypeSymbol] = 'MerchandiseShelf';
    constructor(data) {
        super();
        this.title = data.title;
        this.menu = Parser.parse(data.actionButton);
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default MerchandiseShelf;
