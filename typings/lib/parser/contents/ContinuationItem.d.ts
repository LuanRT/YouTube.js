export = ContinuationItem;
declare class ContinuationItem {
    constructor(item: any);
    type: string;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");
