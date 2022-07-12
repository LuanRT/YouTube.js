import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ReelShelf extends YTNode {
    static [ParserTypeSymbol] = 'ReelShelf';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.items = Parser.parse(data.items);
        this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default ReelShelf;
