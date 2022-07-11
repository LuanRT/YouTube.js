import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./Text.js";

class RichShelf {
    type = 'RichShelf';
    constructor(data) {
        this.title = new Text(data.title);
        this.contents = Parser.parse(data.contents);
        this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
    }
}
export default RichShelf;
