import Parser from "../index.js";

class BrowseFeedActions {
    type = 'BrowseFeedActions';
    constructor(data) {
        this.contents = Parser.parse(data.contents);
    }
}
export default BrowseFeedActions;
