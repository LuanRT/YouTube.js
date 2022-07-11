import NavigationEndpoint from "../NavigationEndpoint.js";

class MenuServiceItemDownload {
    type = 'MenuServiceItemDownload';
    constructor(data) {
        this.has_separator = data.hasSeparator;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
    }
}
export default MenuServiceItemDownload;
