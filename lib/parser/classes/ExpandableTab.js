import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class ExpandableTab extends YTNode {
    static [ParserTypeSymbol] = 'ExpandableTab';
    constructor(data) {
        super();
        this.title = data.title;
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.selected = data.selected; // If this.selected then we may have content else we do not
        this.content = data.content ? Parser.parse(data.content) : null;
    }
}
export default ExpandableTab;
