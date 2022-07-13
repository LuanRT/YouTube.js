import Text from "./misc/Text.js";

import { YTNode } from "../helpers";

class ProfileColumnStatsEntry extends YTNode {
    static type = 'ProfileColumnStatsEntry';
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.value = new Text(data.value);
    }
}
export default ProfileColumnStatsEntry;
