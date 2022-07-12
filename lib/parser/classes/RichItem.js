import Parser from "../index.js";

import { YTNode } from "..";

class RichItem extends YTNode {
    static type = 'RichItem';
    constructor(data) {
        super();
        return Parser.parse(data.content);
    }
}
export default RichItem;
