import Parser from "../index.js";

import { YTNode } from "../helpers";

class RelatedChipCloud extends YTNode {
    static type = 'RelatedChipCloud';
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
    }
}
export default RelatedChipCloud;
