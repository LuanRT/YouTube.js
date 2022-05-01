export = Channel;
declare class Channel {
    constructor(item: any);
    type: string;
    id: any;
    author: Author;
    subscribers: Text;
    description_snippet: Text;
    videos: Text;
    endpoint: NavigationEndpoint;
}
import Author = require("./Author");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
