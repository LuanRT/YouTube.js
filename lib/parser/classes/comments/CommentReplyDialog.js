import Parser from "../../index";
import Thumbnail from "../misc/Thumbnail";
import Text from "../misc/Text";

import { YTNode } from "../../helpers";

class CommentReplyDialog extends YTNode {
    static type = 'CommentReplyDialog';
    constructor(data) {
        super();
        this.reply_button = Parser.parse(data.replyButton);
        this.cancel_button = Parser.parse(data.cancelButton);
        this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
        this.placeholder = new Text(data.placeholderText);
        this.error_message = new Text(data.errorMessage);
    }
}
export default CommentReplyDialog;
