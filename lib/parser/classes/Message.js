import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class Message extends YTNode {
    static [ParserTypeSymbol] = 'Message';
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
    }
}
export default Message;
