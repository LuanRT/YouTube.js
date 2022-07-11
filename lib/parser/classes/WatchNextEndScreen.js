import Parser from "../index.js";
import Text from "./Text.js";

class WatchNextEndScreen {
    constructor(data) {
        this.results = Parser.parse(data.results);
        this.title = new Text(data.title).toString();
    }
}
export default WatchNextEndScreen;
