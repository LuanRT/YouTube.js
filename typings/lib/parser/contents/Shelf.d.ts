export = Shelf;
declare class Shelf {
    constructor(item: any);
    type: string;
    title: Text;
    content: any;
    endpoint: NavigationEndpoint;
    button: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
