import Parser from "../index.js";

import { YTNode } from "..";

class ProfileColumn extends YTNode {
    static #type = Symbol('ProfileColumn');
    static get type() { return this.#type }
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
