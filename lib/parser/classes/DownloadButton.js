import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class DownloadButton extends YTNode {
    static [ParserTypeSymbol] = 'DownloadButton';
    constructor(data) {
        super();
        this.style = data.style;
        this.size = data.size;
        this.endpoint = new NavigationEndpoint(data.command);
        this.target_id = data.targetId;
    }
}
export default DownloadButton;
