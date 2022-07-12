import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class SingleActionEmergencySupport extends YTNode {
    static [ParserTypeSymbol] = 'SingleActionEmergencySupport';
    constructor(data) {
        super();
        this.action_text = new Text(data.actionText);
        this.nav_text = new Text(data.navigationText);
        this.details = new Text(data.detailsText);
        this.icon_type = data.icon.iconType;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default SingleActionEmergencySupport;
