import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class SubFeedSelector extends YTNode {
    static [ParserTypeSymbol] = 'SubFeedSelector';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.options = Parser.parse(data.options);
    }
}
export default SubFeedSelector;
