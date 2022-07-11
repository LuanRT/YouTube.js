import Parser from "../../index.js";

class AddChatItemAction {
    type = 'AddChatItemAction';
    constructor(data) {
        this.item = Parser.parse(data.item);
        this.client_id = data.clientId || null;
    }
}
export default AddChatItemAction;
