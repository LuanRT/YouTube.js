import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class FeedTabbedHeader extends YTNode {
    static [ParserTypeSymbol] = 'FeedTabbedHeader';
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
export default FeedTabbedHeader;
