import Parser from "../index.js";

import { YTNode } from "..";

class MetadataRowContainer extends YTNode {
    static type = 'MetadataRowContainer';
    rows;
    collapsed_item_count: number; // TODO: validate this assumption
    constructor(data: any) {
        super();
        this.rows = Parser.parseArray(data.rows);
        this.collapsed_item_count = data.collapsedItemCount;
    }
}
export default MetadataRowContainer;
