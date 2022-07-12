import Parser from "../../index.js";

import { YTNode } from "../..";

class AppendContinuationItemsAction extends YTNode {
    static #type = Symbol('AppendContinuationItemsAction');
    static get type() { return this.#type };
    constructor(data) {
        super();
        this.items = Parser.parse(data.continuationItems);
        this.target = data.target;
    }
}
export default AppendContinuationItemsAction;
