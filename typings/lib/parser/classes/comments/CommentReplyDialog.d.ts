export = CommentReplyDialog;
declare class CommentReplyDialog {
    constructor(data: any);
    type: string;
    reply_button: any;
    cancel_button: any;
    author_thumbnail: Thumbnail[];
    placeholder: Text;
    error_message: Text;
}
import Thumbnail = require("../Thumbnail");
import Text = require("../Text");
