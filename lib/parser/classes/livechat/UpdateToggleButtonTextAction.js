import Text from "../misc/Text.js";

import { YTNode, ParserTypeSymbol } from "../..";

class UpdateToggleButtonTextAction extends YTNode {
    static [ParserTypeSymbol] = 'UpdateToggleButtonTextAction';
    constructor(data) {
        super();
        this.default_text = new Text(data.defaultText).toString();
        this.toggled_text = new Text(data.toggledText).toString();
        this.button_id = data.buttonId;
    }
}
export default UpdateToggleButtonTextAction;
