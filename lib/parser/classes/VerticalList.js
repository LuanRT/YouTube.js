import Parser from "../index.js";
import Text from "./Text.js";

class VerticalList {
    type = 'VerticalList';
    constructor(data) {
        this.items = Parser.parse(data.items);
        this.collapsed_item_count = data.collapsedItemCount;
        this.collapsed_state_button_text = new Text(data.collapsedStateButtonText);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default VerticalList;
