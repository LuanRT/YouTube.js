import Text from "./misc/Text.js";

import { YTNode } from "..";

class Message extends YTNode {
    static #type = Symbol('Message');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
    }
}
export default Message;
