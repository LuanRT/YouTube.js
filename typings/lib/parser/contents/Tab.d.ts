export = Tab;
declare class Tab {
    constructor(item: any);
    type: string;
    title: any;
    endpoint: NavigationEndpoint;
    selected: any;
    content: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");
