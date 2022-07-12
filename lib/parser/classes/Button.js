import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class Button extends YTNode {
    static type = 'Button';
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
        if (data.accessibility?.label) {
            this.label = data.accessibility?.label;
        }
        if (data.tooltip) {
            this.tooltip = data.tooltip;
        }
        if (data.icon?.iconType) {
            this.iconType = data.icon?.iconType;
        }
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint || data.command);
    }
}
export default Button;
