export = ReelShelf;
declare class ReelShelf {
    constructor(data: any);
    type: string;
    title: Text;
    items: any;
    endpoint: NavigationEndpoint;
    contents: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
