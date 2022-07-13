import Text from "../misc/Text.js";

import { YTNode } from "../../helpers";

class UpdateDescriptionAction extends YTNode {
    static type = 'UpdateDescriptionAction';
    constructor(data) {
        super();
        this.description = new Text(data.description);
    }
}
export default UpdateDescriptionAction;
