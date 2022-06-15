export = WatchCardRichHeader;
declare class WatchCardRichHeader {
    constructor(item: any);
    type: string;
    title: Text;
    subtitle: Text;
    author: Author;
}
import Text = require("./Text");
import Author = require("./Author");
