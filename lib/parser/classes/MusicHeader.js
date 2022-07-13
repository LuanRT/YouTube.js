import Parser from "../index.js";

import { YTNode } from "../helpers";

class MusicHeader extends YTNode {
    static type = 'MusicHeader';
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
    }
}
export default MusicHeader;
