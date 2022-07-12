import Text from "../misc/Text.js";

import { YTNode, ParserTypeSymbol } from "../..";

class UpdateDescriptionAction extends YTNode {
    static [ParserTypeSymbol] = 'UpdateDescriptionAction';
    constructor(data) {
        super();
        this.description = new Text(data.description);
    }
}
export default UpdateDescriptionAction;
