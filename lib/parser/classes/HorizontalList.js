import Parser from "../index";

import { YTNode } from "../helpers";

class HorizontalList extends YTNode {
    static type = 'HorizontalList';
    constructor(data) {
        super();
        this.visible_item_count = data.visibleItemCount;
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default HorizontalList;
