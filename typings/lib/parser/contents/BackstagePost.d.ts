export = BackstagePost;
declare class BackstagePost {
    constructor(item: any);
    type: string;
    id: any;
    author: Author;
    content: Text;
    published_at: Text;
    likes: Text;
    actions: any;
    attachment: any;
    get endpoint(): any;
}
import Author = require("./Author");
import Text = require("./Text");
