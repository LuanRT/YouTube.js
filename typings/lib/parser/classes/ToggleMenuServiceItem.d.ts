export = ToggleMenuServiceItem;
declare class ToggleMenuServiceItem {
    constructor(data: any);
    type: string;
    text: Text;
    toggled_text: Text;
    icon_type: any;
    toggled_icon_type: any;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
