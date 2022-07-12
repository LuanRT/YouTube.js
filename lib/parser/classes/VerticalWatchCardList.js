import Parser from "../index.js";
import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class VerticalWatchCardList extends YTNode {
    static [ParserTypeSymbol] = 'VerticalWatchCardList';
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
        this.contents = this.items; // XXX: alias for consistency
        this.view_all_text = new Text(data.viewAllText);
        this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
    }
}
export default VerticalWatchCardList;
