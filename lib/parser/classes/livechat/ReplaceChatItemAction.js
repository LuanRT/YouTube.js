import Parser from "../../index.js";

class ReplaceChatItemAction {
    constructor(data) {
        this.target_item_id = data.targetItemId;
        this.replacement_item = Parser.parse(data.replacementItem);
    }
}
export default ReplaceChatItemAction;
