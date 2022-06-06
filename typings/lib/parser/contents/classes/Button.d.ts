export = Button;
declare class Button {
    constructor(data: any);
    type: string;
    text: any;
    tooltip: any;
    icon_type: any;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");
