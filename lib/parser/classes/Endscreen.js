import Parser from "../index.js";

import { YTNode } from "..";

class Endscreen extends YTNode {
    static type = 'Endscreen';
    constructor(data) {
        super();
        this.elements = Parser.parse(data.elements);
        this.start_ms = data.startMs;
    }
}
export default Endscreen;
