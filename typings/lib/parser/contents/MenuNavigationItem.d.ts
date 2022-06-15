export = MenuNavigationItem;
declare class MenuNavigationItem {
    constructor(item: any);
    type: string;
    endpoint: NavigationEndpoint;
    text: Text;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
