import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class SubFeedOption extends YTNode {
    static #type = Symbol('SubFeedOption');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.name = new Text(data.name);
        this.is_selected = data.isSelected;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default SubFeedOption;
