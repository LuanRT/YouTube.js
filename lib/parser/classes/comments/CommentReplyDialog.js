import Parser from "../../index.js";
import Thumbnail from "../Thumbnail.js";
import Text from "../Text.js";

class CommentReplyDialog {
    type = 'CommentReplyDialog';
    constructor(data) {
        this.reply_button = Parser.parse(data.replyButton);
        this.cancel_button = Parser.parse(data.cancelButton);
        this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
        this.placeholder = new Text(data.placeholderText);
        this.error_message = new Text(data.errorMessage);
    }
}
export default CommentReplyDialog;
