import Parser from "../../index.js";

class MultiPageMenuNotificationSection {
    type = 'MultiPageMenuNotificationSection';
    constructor(data) {
        this.items = Parser.parse(data.items);
    }
    get contents() {
        return this.items;
    }
}
export default MultiPageMenuNotificationSection;
