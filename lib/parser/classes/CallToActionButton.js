import Text from "./misc/Text.js";

import { YTNode } from "..";

class CallToActionButton extends YTNode {
    static #type = Symbol('CallToActionButton');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.icon_type = data.icon.iconType;
        this.style = data.style;
    }
}
export default CallToActionButton;
