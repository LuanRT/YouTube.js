export = SingleActionEmergencySupport;
declare class SingleActionEmergencySupport {
    constructor(data: any);
    type: string;
    action_text: Text;
    nav_text: Text;
    details: Text;
    icon_type: any;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
