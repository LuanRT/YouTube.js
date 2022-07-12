import Parser from "../index.js";

import { YTNode } from "..";

class ItemSection extends YTNode {
    static type = 'ItemSection';
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
        this.contents = Parser.parse(data.contents);
        if (data.targetId || data.sectionIdentifier) {
            this.target_id = data?.target_id || data?.sectionIdentifier;
        }
    }
}
export default ItemSection;
