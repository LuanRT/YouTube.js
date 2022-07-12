import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class ToggleMenuServiceItem extends YTNode {
    static type = 'ToggleMenuServiceItem';
    constructor(data) {
        super();
        this.text = new Text(data.defaultText);
        this.toggled_text = new Text(data.toggledText);
        this.icon_type = data.defaultIcon.iconType;
        this.toggled_icon_type = data.toggledIcon.iconType;
        this.endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
    }
}
export default ToggleMenuServiceItem;
