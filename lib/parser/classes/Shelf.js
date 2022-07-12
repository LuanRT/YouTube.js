import Text from "./misc/Text.js";
import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class Shelf extends YTNode {
    static [ParserTypeSymbol] = 'Shelf';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        if (data.endpoint) {
            this.endpoint = new NavigationEndpoint(data.endpoint);
        }
        this.content = Parser.parse(data.content) || [];
        if (data.icon?.iconType) {
            this.icon_type = data.icon?.iconType;
        }
        if (data.menu) {
            this.menu = Parser.parse(data.menu);
        }
    }
}
export default Shelf;
