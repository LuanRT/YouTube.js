import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class AddChatItemAction extends YTNode {
    static [ParserTypeSymbol] = 'AddChatItemAction';
    constructor(data) {
        super();
        this.item = Parser.parse(data.item);
        this.client_id = data.clientId || null;
    }
}
export default AddChatItemAction;
