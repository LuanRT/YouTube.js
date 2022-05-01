export = Button;
declare class Button {
    constructor(item: any);
    type: string;
    navigation_endpoint: NavigationEndpoint;
    service_endpoint: NavigationEndpoint;
    text: Text;
    tooltip: any;
    get endpoint(): NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
