import Parser from "../../index.js";

import { YTNode } from "../..";

class ShowLiveChatActionPanelAction extends YTNode {
    static #type = Symbol('ShowLiveChatActionPanelAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.panel_to_show = Parser.parse(data.panelToShow);
    }
}
export default ShowLiveChatActionPanelAction;
