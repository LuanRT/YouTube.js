import Text from "../misc/Text.js";

import { YTNode, ParserTypeSymbol } from "../..";

class UpdateDateTextAction extends YTNode {
    static [ParserTypeSymbol] = 'UpdateDateTextAction';
    constructor(data) {
        super();
        this.date_text = new Text(data.dateText).toString();
    }
}
export default UpdateDateTextAction;
