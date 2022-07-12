import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class CommentActionButtons extends YTNode {
    static [ParserTypeSymbol] = 'CommentActionButtons';
    constructor(data) {
        super();
        this.like_button = Parser.parse(data.likeButton);
        this.dislike_button = Parser.parse(data.dislikeButton);
        this.reply_button = Parser.parse(data.replyButton);
    }
}
export default CommentActionButtons;
