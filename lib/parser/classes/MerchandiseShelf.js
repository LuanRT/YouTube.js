import Parser from "../index";

import { YTNode } from "../helpers";

class MerchandiseShelf extends YTNode {
    static type = 'MerchandiseShelf';
    constructor(data) {
        super();
        this.title = data.title;
        this.menu = Parser.parse(data.actionButton);
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default MerchandiseShelf;
