import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class ContinuationItem extends YTNode {
    static type = 'ContinuationItem';
    constructor(data) {
        super();
        this.trigger = data.trigger;
        data.button &&
            (this.button = Parser.parse(data.button));
        this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
    }
}
export default ContinuationItem;
