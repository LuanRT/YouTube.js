import Text from "./misc/Text.js";

import { YTNode } from "..";

class FeedTabbedHeader extends YTNode {
    static type = 'FeedTabbedHeader';
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
export default FeedTabbedHeader;
