import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class WatchNextEndScreen extends YTNode {
    static type = 'WatchNextEndScreen';
    constructor(data) {
        super();
        this.results = Parser.parse(data.results);
        this.title = new Text(data.title).toString();
    }
}
export default WatchNextEndScreen;
