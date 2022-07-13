import Parser from "../index.js";

import { YTNode } from "../helpers";

class Tabbed extends YTNode {
    static type = 'Tabbed';
    constructor(data) {
        super();
        return Parser.parse(data);
    }
}
export default Tabbed;
