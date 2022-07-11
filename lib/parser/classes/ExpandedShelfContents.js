import Parser from "../index.js";

class ExpandedShelfContents {
    type = 'ExpandedShelfContents';
    constructor(data) {
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default ExpandedShelfContents;
