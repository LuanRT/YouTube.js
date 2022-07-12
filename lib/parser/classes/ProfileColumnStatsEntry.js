import Text from "./misc/Text.js";

import { YTNode } from "..";

class ProfileColumnStatsEntry extends YTNode {
    static #type = Symbol('ProfileColumnStatsEntry');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.value = new Text(data.value);
    }
}
export default ProfileColumnStatsEntry;
