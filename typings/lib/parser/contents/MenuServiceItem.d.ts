export = MenuServiceItem;
declare class MenuServiceItem {
    constructor(item: any);
    type: string;
    endpoint: NavigationEndpoint;
    text: Text;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
