import Text from "../misc/Text.js";

import { YTNode, ParserTypeSymbol } from "../..";

class UpdateTitleAction extends YTNode {
    static [ParserTypeSymbol] = 'UpdateTitleAction';
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
export default UpdateTitleAction;
