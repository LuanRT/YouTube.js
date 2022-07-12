import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class DidYouMean extends YTNode {
    static [ParserTypeSymbol] = 'DidYouMean';
    constructor(data) {
        super();
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default DidYouMean;
