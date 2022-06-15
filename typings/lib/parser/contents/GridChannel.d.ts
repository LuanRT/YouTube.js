export = GridChannel;
declare class GridChannel {
    constructor(item: any);
    type: string;
    id: any;
    author: Author;
    subscribers: Text;
    videos: Text;
    endpoint: NavigationEndpoint;
}
import Author = require("./Author");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
