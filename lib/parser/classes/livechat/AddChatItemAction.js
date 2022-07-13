import Parser from "../../index.js";

import { YTNode } from "../../helpers";

class AddChatItemAction extends YTNode {
    static type = 'AddChatItemAction';
    constructor(data) {
        super();
        this.item = Parser.parse(data.item);
        this.client_id = data.clientId || null;
    }
}
export default AddChatItemAction;
