export = CommentsEntryPointHeader;
declare class CommentsEntryPointHeader {
    constructor(data: any);
    type: string;
    header: Text;
    comment_count: Text;
    teaser_avatar: Thumbnail[];
    teaser_content: Text;
    simplebox_placeholder: Text;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
