import Text from "../misc/Text.js";

import { YTNode } from "../..";

class UpdateToggleButtonTextAction extends YTNode {
    static #type = Symbol('UpdateToggleButtonTextAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.default_text = new Text(data.defaultText).toString();
        this.toggled_text = new Text(data.toggledText).toString();
        this.button_id = data.buttonId;
    }
}
export default UpdateToggleButtonTextAction;
