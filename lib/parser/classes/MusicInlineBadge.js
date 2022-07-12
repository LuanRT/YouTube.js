
import { YTNode } from "..";

class MusicInlineBadge extends YTNode {
    static #type = Symbol('MusicInlineBadge');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.icon_type = data.icon.iconType;
        this.label = data.accessibilityData.accessibilityData.label;
    }
}
export default MusicInlineBadge;
