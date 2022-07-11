export = ContinuationItem;
declare class ContinuationItem {
    constructor(data: any);
    type: string;
    trigger: any;
    button: any;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");
