export = Shelf;
declare class Shelf {
    constructor(data: any);
    type: string;
    title: Text;
    endpoint: NavigationEndpoint;
    content: any;
    icon_type: any;
    menu: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
