import Parser from "../../index.js";

import { YTNode } from "../../helpers";

class AppendContinuationItemsAction extends YTNode {
    static type = 'AppendContinuationItemsAction';;
    constructor(data) {
        super();
        this.items = Parser.parse(data.continuationItems);
        this.target = data.target;
    }
}
export default AppendContinuationItemsAction;
