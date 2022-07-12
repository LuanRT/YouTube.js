import Text from "../misc/Text.js";

import { YTNode } from "../..";

class UpdateDateTextAction extends YTNode {
    static type = 'UpdateDateTextAction';
    constructor(data) {
        super();
        this.date_text = new Text(data.dateText).toString();
    }
}
export default UpdateDateTextAction;
