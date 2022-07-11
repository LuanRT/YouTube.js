import Parser from "../index.js";
import Text from "./Text.js";

class SubFeedSelector {
    type = 'SubFeedSelector';
    constructor(data) {
        this.title = new Text(data.title);
        this.options = Parser.parse(data.options);
    }
}
export default SubFeedSelector;
