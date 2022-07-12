import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class CommentReplies extends YTNode {
    static [ParserTypeSymbol] = 'CommentReplies';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
        this.view_replies = Parser.parse(data.viewReplies);
        this.hide_replies = Parser.parse(data.hideReplies);
    }
}
export default CommentReplies;
