import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class MetadataRowContainer extends YTNode {
    static [ParserTypeSymbol] = 'MetadataRowContainer';
    constructor(data) {
        super();
        this.rows = Parser.parse(data.rows);
        this.collapsed_item_count = data.collapsedItemCount;
    }
}
export default MetadataRowContainer;
