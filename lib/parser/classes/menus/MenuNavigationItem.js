import Button from "../Button.js";

import { YTNode, ParserTypeSymbol } from "../..";

class MenuNavigationItem extends Button extends YTNode {
    static [ParserTypeSymbol] = 'MenuNavigationItem';
    constructor(data) {
        super();
        super(data);
    }
}
export default MenuNavigationItem;
