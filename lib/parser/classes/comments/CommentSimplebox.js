import Parser from "../../index.js";
import Thumbnail from "../Thumbnail.js";
import Text from "../misc/Text.js";

import { YTNode, ParserTypeSymbol } from "../..";

class CommentSimplebox extends YTNode {
    static [ParserTypeSymbol] = 'CommentSimplebox';
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
