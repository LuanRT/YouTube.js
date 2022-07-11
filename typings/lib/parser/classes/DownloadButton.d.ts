export = DownloadButton;
declare class DownloadButton {
    constructor(data: any);
    type: string;
    style: any;
    size: any;
    endpoint: NavigationEndpoint;
    target_id: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");
