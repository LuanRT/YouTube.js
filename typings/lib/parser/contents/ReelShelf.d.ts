export = ReelShelf;
declare class ReelShelf {
    constructor(item: any);
    type: string;
    title: Text;
    items: any;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
