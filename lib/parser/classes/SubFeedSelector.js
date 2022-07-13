import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "../helpers";

class SubFeedSelector extends YTNode {
    static type = 'SubFeedSelector';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.options = Parser.parse(data.options);
    }
}
export default SubFeedSelector;
