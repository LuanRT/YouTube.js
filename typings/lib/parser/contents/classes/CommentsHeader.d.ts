export = CommentsHeader;
declare class CommentsHeader {
    constructor(data: any);
    type: string;
    title: Text;
    count: Text;
    comments_count: Text;
    create_renderer: any;
    sort_menu: any;
    custom_emojis: any;
}
import Text = require("./Text");
