import Parser from "../../index.js";

import { YTNode } from "../..";

class ShowLiveChatTooltipCommand extends YTNode {
    static #type = Symbol('ShowLiveChatTooltipCommand');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.tooltip = Parser.parse(data.tooltip);
    }
}
export default ShowLiveChatTooltipCommand;
