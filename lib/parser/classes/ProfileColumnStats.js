import Parser from "../index.js";

import { YTNode } from "..";

class ProfileColumnStats extends YTNode {
    static type = 'ProfileColumnStats';
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default ProfileColumnStats;
