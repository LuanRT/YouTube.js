export = CompactLink;
declare class CompactLink {
    constructor(data: any);
    type: string;
    title: any;
    endpoint: NavigationEndpoint;
    style: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");
