import Parser from "../index.js";

import { YTNode } from "..";

class WatchCardSectionSequence extends YTNode {
    static type = 'WatchCardSectionSequence';
    constructor(data) {
        super();
        this.lists = Parser.parse(data.lists);
    }
}
export default WatchCardSectionSequence;
