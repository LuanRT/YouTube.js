export = C4TabbedHeader;
declare class C4TabbedHeader {
    constructor(data: any);
    type: string;
    author: Author;
    banner: Thumbnail[];
    tv_banner: Thumbnail[];
    mobile_banner: Thumbnail[];
    subscribers: Text;
    sponsor_button: any;
    subscribe_button: any;
    header_links: any;
}
import Author = require("./Author");
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
