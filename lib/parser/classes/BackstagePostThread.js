import Parser from "../index";

import { YTNode } from "../helpers";

class BackstagePostThread extends YTNode {
    static type = 'BackstagePostThread';
    constructor(data) {
        super();
        this.post = Parser.parse(data.post);
    }
}
export default BackstagePostThread;
