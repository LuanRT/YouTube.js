import Button from "../Button.js";

import { YTNode } from "../..";

class MenuNavigationItem extends Button extends YTNode {
    static type = 'MenuNavigationItem';
    constructor(data) {
        super();
        super(data);
    }
}
export default MenuNavigationItem;
