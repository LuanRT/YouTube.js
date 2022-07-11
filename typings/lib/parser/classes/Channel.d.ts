export = Channel;
declare class Channel {
    constructor(data: any);
    type: string;
    id: any;
    author: Author;
    subscribers: Text;
    videos: Text;
    endpoint: NavigationEndpoint;
    description_snippet: Text;
}
import Author = require("./Author");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
