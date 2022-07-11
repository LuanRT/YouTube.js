import Parser from "../../index.js";

class AddLiveChatTickerItemAction {
    type = 'AddLiveChatTickerItemAction';
    constructor(data) {
        this.item = Parser.parse(data.item);
        this.duration_sec = data.durationSec;
    }
}
export default AddLiveChatTickerItemAction;
