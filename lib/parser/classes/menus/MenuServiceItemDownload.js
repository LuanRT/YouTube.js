import NavigationEndpoint from "../NavigationEndpoint.js";

import { YTNode } from "../..";

class MenuServiceItemDownload extends YTNode {
    static type = 'MenuServiceItemDownload';
    constructor(data) {
        super();
        this.has_separator = data.hasSeparator;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
    }
}
export default MenuServiceItemDownload;
