export = Button;
declare class Button {
    constructor(data: any);
    type: string;
    text: any;
    label: any;
    tooltip: any;
    iconType: any;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");
