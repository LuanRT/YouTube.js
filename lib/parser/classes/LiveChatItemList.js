import Parser from "../index.js";

import { YTNode } from "..";

class LiveChatItemList extends YTNode {
    static type = 'LiveChatItemList';
    constructor(data) {
        super();
        this.max_items_to_display = data.maxItemsToDisplay;
        this.more_comments_below_button = Parser.parse(data.moreCommentsBelowButton);
    }
}
export default LiveChatItemList;
