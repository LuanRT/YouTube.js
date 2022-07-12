import Parser from "../../index.js";

import { YTNode } from "../..";

class CommentActionButtons extends YTNode {
    static #type = Symbol('CommentActionButtons');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.like_button = Parser.parse(data.likeButton);
        this.dislike_button = Parser.parse(data.dislikeButton);
        this.reply_button = Parser.parse(data.replyButton);
    }
}
export default CommentActionButtons;
