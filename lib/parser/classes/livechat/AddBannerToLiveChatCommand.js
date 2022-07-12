import Parser from "../../index.js";

import { YTNode } from "../..";

class AddBannerToLiveChatCommand extends YTNode {
    static #type = Symbol('AddBannerToLiveChatCommand');
    static get type() { return this.#type }
    constructor(data) {
        super();
        return Parser.parse(data.bannerRenderer);
    }
}
export default AddBannerToLiveChatCommand;
