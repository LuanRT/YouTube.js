export = Tab;
declare class Tab {
    constructor(data: any);
    type: string;
    title: any;
    selected: any;
    endpoint: NavigationEndpoint;
    content: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");
