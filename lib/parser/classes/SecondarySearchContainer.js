import Parser from "../index.js";

import { YTNode } from "..";

class SecondarySearchContainer extends YTNode {
    static type = 'SecondarySearchContainer';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default SecondarySearchContainer;
