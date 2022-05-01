export = RichShelf;
declare class RichShelf {
    constructor(item: any);
    type: string;
    title: Text;
    contents: any;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
