import Parser from "../../index.js";
import Text from "../misc/Text.js";

import { YTNode } from "../../helpers";

class SimpleMenuHeader extends YTNode {
    static type = 'SimpleMenuHeader';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.buttons = Parser.parse(data.buttons);
    }
}
export default SimpleMenuHeader;
