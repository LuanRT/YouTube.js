export = CommentsEntryPointHeader;
declare class CommentsEntryPointHeader {
    constructor(data: any);
    type: string;
    header: Text;
    comment_count: Text;
    teaser_avatar: any;
    teaser_content: Text;
}
import Text = require("./Text");
