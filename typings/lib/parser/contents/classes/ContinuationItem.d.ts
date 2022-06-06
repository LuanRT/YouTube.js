export = ContinuationItem;
declare class ContinuationItem {
    constructor(data: any);
    type: string;
    trigger: any;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");
