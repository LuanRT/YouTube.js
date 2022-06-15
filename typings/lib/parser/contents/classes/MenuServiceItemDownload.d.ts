export = MenuServiceItemDownload;
declare class MenuServiceItemDownload {
    constructor(data: any);
    type: string;
    has_separator: any;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");
