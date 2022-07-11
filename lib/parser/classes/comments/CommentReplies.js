import Parser from "../../index.js";

class CommentReplies {
    type = 'CommentReplies';
    constructor(data) {
        this.contents = Parser.parse(data.contents);
        this.view_replies = Parser.parse(data.viewReplies);
        this.hide_replies = Parser.parse(data.hideReplies);
    }
}
export default CommentReplies;
