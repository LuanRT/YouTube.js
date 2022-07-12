import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class CallToActionButton extends YTNode {
    static [ParserTypeSymbol] = 'CallToActionButton';
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.icon_type = data.icon.iconType;
        this.style = data.style;
    }
}
export default CallToActionButton;
