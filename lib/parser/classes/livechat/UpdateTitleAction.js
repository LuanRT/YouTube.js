import Text from "../misc/Text.js";

import { YTNode } from "../..";

class UpdateTitleAction extends YTNode {
    static #type = Symbol('UpdateTitleAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
export default UpdateTitleAction;
