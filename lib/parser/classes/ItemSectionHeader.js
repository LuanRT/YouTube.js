import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ItemSectionHeader extends YTNode {
    static [ParserTypeSymbol] = 'ItemSectionHeader';
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
export default ItemSectionHeader;
