import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class ItemSection extends YTNode {
    static [ParserTypeSymbol] = 'ItemSection';
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
