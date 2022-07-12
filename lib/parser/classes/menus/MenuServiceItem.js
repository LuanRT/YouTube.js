import Button from "../Button.js";

import { YTNode } from "../..";

class MenuServiceItem extends Button extends YTNode {
    static type = 'MenuServiceItem';
    constructor(data) {
        super();
        super(data);
    }
}
export default MenuServiceItem;
