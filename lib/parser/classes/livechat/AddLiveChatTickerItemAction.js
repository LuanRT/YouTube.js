import Parser from "../../index";

import { YTNode } from "../../helpers";

class AddLiveChatTickerItemAction extends YTNode {
    static type = 'AddLiveChatTickerItemAction';
    constructor(data) {
        super();
        this.item = Parser.parse(data.item);
        this.duration_sec = data.durationSec;
    }
}
export default AddLiveChatTickerItemAction;
