export = BackstagePost;
declare class BackstagePost {
    constructor(data: any);
    type: string;
    id: any;
    author: Author;
    content: Text;
    published: Text;
    poll_status: any;
    vote_status: any;
    likes: Text;
    menu: any;
    actions: any;
    vote_button: any;
    surface: any;
    endpoint: NavigationEndpoint;
    attachment: any;
}
import Author = require("./Author");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
