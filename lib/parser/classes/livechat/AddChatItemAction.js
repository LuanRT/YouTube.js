import Parser from "../../index.js";

import { YTNode } from "../..";

class AddChatItemAction extends YTNode {
    static #type = Symbol('AddChatItemAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.item = Parser.parse(data.item);
        this.client_id = data.clientId || null;
    }
}
export default AddChatItemAction;
