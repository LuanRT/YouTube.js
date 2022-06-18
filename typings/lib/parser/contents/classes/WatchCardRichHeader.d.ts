export = WatchCardRichHeader;
declare class WatchCardRichHeader {
    constructor(data: any);
    type: string;
    title: Text;
    title_endpoint: NavigationEndpoint;
    subtitle: Text;
    author: Author;
    style: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
import Author = require("./Author");
