import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class ChipCloudChip extends YTNode {
    static [ParserTypeSymbol] = 'ChipCloudChip';
    constructor(data) {
        super();
        // TODO: is this isSelected or just selected
        this.is_selected = data.isSelected;
        this.endpoint = data.navigationEndpoint && new NavigationEndpoint(data.navigationEndpoint);
        this.text = new Text(data.text).toString();
    }
}
export default ChipCloudChip;
