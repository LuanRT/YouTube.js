import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class SubFeedOption extends YTNode {
    static [ParserTypeSymbol] = 'SubFeedOption';
    constructor(data) {
        super();
        this.name = new Text(data.name);
        this.is_selected = data.isSelected;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default SubFeedOption;
