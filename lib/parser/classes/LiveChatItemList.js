import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class LiveChatItemList extends YTNode {
    static [ParserTypeSymbol] = 'LiveChatItemList';
    constructor(data) {
        super();
        this.max_items_to_display = data.maxItemsToDisplay;
        this.more_comments_below_button = Parser.parse(data.moreCommentsBelowButton);
    }
}
export default LiveChatItemList;
