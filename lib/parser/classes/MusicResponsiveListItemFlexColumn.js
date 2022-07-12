import Text from "./misc/Text.js";

import { YTNode } from "..";

class MusicResponsiveListItemFlexColumn extends YTNode {
    static #type = Symbol('musicResponsiveListItemFlexColumnRenderer');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.text);
        this.display_priority = data.displayPriority;
    }
}
export default MusicResponsiveListItemFlexColumn;
