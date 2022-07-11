import Parser from "../../index.js";
import Text from "../Text.js";

class SimpleMenuHeader {
    type = 'SimpleMenuHeader';
    constructor(data) {
        this.title = new Text(data.title);
        this.buttons = Parser.parse(data.buttons);
    }
}
export default SimpleMenuHeader;
