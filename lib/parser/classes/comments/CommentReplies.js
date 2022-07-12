import Parser from "../../index.js";

import { YTNode } from "../..";

class CommentReplies extends YTNode {
    static #type = Symbol('CommentReplies');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
        this.view_replies = Parser.parse(data.viewReplies);
        this.hide_replies = Parser.parse(data.hideReplies);
    }
}
export default CommentReplies;
