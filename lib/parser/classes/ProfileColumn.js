import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class ProfileColumn extends YTNode {
    static [ParserTypeSymbol] = 'ProfileColumn';
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default ProfileColumn;
