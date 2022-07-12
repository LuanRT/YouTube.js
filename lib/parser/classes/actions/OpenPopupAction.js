import Parser from "../../index.js";

import { YTNode } from "../..";

class OpenPopupAction extends YTNode {
    static #type = Symbol('OpenPopupAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.popup = Parser.parse(data.popup);
        this.popup_type = data.popupType;
    }
}
export default OpenPopupAction;
