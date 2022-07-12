import Parser from "../index.js";

import { YTNode } from "..";

class BrowseFeedActions extends YTNode {
    static type = 'BrowseFeedActions';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default BrowseFeedActions;
