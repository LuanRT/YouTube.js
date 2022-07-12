import Parser from "../../index.js";

import { YTNode } from "../..";

class UpdateLiveChatPollAction extends YTNode {
    static #type = Symbol('UpdateLiveChatPollAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.poll_to_update = Parser.parse(data.pollToUpdate);
    }
}
export default UpdateLiveChatPollAction;
