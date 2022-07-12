import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class SimpleCardTeaser extends YTNode {
    static [ParserTypeSymbol] = 'SimpleCardTeaser';
    constructor(data) {
        super();
        this.message = new Text(data.message);
        this.prominent = data.prominent;
    }
}
export default SimpleCardTeaser;
