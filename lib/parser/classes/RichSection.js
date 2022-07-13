import Parser from "../index.js";

import { YTNode } from "../helpers";

class RichSection extends YTNode {
    static type = 'RichSection';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.content);
    }
}
export default RichSection;
