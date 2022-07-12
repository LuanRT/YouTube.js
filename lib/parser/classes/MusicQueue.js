import Parser from "../index.js";

import { YTNode } from "..";

class MusicQueue extends YTNode {
    static type = 'MusicQueue';
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
    }
}
export default MusicQueue;
