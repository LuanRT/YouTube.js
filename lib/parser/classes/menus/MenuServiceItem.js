import Button from "../Button.js";

import { YTNode, ParserTypeSymbol } from "../..";

class MenuServiceItem extends Button extends YTNode {
    static [ParserTypeSymbol] = 'MenuServiceItem';
    constructor(data) {
        super();
        super(data);
    }
}
export default MenuServiceItem;
