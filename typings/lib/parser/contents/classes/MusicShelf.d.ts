export = MusicShelf;
declare class MusicShelf {
    constructor(data: any);
    type: string;
    title: Text;
    contents: any;
    endpoint: NavigationEndpoint;
    continuation: any;
    bottom_text: Text;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
