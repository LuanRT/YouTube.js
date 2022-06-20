export = GridChannel;
declare class GridChannel {
    constructor(data: any);
    type: string;
    id: any;
    author: Author;
    subscribers: Text;
    video_count: Text;
    endpoint: NavigationEndpoint;
    subscribe_button: any;
}
import Author = require("./Author");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
