import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class TextHeader extends YTNode {
    static [ParserTypeSymbol] = 'TextHeader';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.style = data.style;
    }
}
export default TextHeader;
