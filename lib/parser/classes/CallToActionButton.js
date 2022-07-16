import Text from "./misc/Text";

import { YTNode } from "../helpers";

class CallToActionButton extends YTNode {
    static type = 'CallToActionButton';
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.icon_type = data.icon.iconType;
        this.style = data.style;
    }
}
export default CallToActionButton;
