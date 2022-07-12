import Text from "../misc/Text.js";

import { YTNode } from "../..";

class UpdateDescriptionAction extends YTNode {
    static #type = Symbol('UpdateDescriptionAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.description = new Text(data.description);
    }
}
export default UpdateDescriptionAction;
