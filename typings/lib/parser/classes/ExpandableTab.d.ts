export = ExpandableTab;
declare class ExpandableTab {
    constructor(data: any);
    type: string;
    title: any;
    endpoint: NavigationEndpoint;
    selected: any;
    content: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");
