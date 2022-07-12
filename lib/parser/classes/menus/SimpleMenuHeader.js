import Parser from "../../index.js";
import Text from "../misc/Text.js";

import { YTNode, ParserTypeSymbol } from "../..";

class SimpleMenuHeader extends YTNode {
    static [ParserTypeSymbol] = 'SimpleMenuHeader';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.buttons = Parser.parse(data.buttons);
    }
}
export default SimpleMenuHeader;
