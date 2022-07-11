export = MusicShelf;
declare class MusicShelf {
    constructor(data: any);
    type: string;
    title: any;
    contents: any;
    endpoint: NavigationEndpoint;
    continuation: any;
    bottom_text: Text;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
