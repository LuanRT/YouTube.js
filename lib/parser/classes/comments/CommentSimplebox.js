import Parser from "../../index.js";
import Thumbnail from "../misc/Thumbnail.js";
import Text from "../misc/Text.js";

import { YTNode } from "../../helpers";

class CommentSimplebox extends YTNode {
    static type = 'CommentSimplebox';
    constructor(data) {
        super();
        this.submit_button = Parser.parse(data.submitButton);
        this.cancel_button = Parser.parse(data.cancelButton);
        this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
        this.placeholder = new Text(data.placeholderText);
        this.avatar_size = data.avatarSize;
    }
}
export default CommentSimplebox;
