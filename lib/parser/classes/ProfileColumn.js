import Parser from "../index.js";

import { YTNode } from "../helpers";

class ProfileColumn extends YTNode {
    static type = 'ProfileColumn';
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
