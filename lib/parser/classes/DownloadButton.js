import NavigationEndpoint from "./NavigationEndpoint";

import { YTNode } from "../helpers";

class DownloadButton extends YTNode {
    static type = 'DownloadButton';
    constructor(data) {
        super();
        this.style = data.style;
        this.size = data.size;
        this.endpoint = new NavigationEndpoint(data.command);
        this.target_id = data.targetId;
    }
}
export default DownloadButton;
