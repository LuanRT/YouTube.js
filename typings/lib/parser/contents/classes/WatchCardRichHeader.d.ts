export = WatchCardRichHeader;
declare class WatchCardRichHeader {
    constructor(data: any);
    type: string;
    title: Text;
    title_endpoint: any;
    subtitle: Text;
    author: Author;
    style: any;
}
import Text = require("./Text");
import Author = require("./Author");
