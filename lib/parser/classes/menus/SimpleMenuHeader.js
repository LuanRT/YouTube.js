import Parser from "../../index";
import Text from "../misc/Text";

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
