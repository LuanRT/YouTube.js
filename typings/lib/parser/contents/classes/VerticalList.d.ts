export = VerticalList;
declare class VerticalList {
    constructor(data: any);
    type: string;
    items: any;
    collapsed_item_count: any;
    collapsed_state_button_text: Text;
    get contents(): any;
}
import Text = require("./Text");
