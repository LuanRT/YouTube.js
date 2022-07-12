import Text from "./misc/Text.js";

import { YTNode } from "..";

class Message extends YTNode {
    static type = 'Message';
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
    }
}
export default Message;
