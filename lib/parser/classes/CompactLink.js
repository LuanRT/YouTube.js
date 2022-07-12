import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class CompactLink extends YTNode {
    static [ParserTypeSymbol] = 'CompactLink';
    constructor(data) {
        super();
        this.title = new Text(data.title).toString();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.style = data.style;
    }
}
export default CompactLink;
