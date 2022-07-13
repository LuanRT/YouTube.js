import Parser from "../index.js";

import { YTNode } from "..";
import { observe } from "../../utils/Utils.js";

class MetadataRowContainer extends YTNode {
    static type = 'MetadataRowContainer';
    rows;
    collapsed_item_count: number; // TODO: validate this assumption
    constructor(data: any) {
        super();
        this.rows = Parser.parse(data.rows, true) || observe([] as YTNode[]);
        this.collapsed_item_count = data.collapsedItemCount;
    }
}
export default MetadataRowContainer;
