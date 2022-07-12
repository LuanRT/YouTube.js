import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class MusicResponsiveListItemFixedColumn extends YTNode {
    static [ParserTypeSymbol] = 'musicResponsiveListItemFlexColumnRenderer';
    constructor(data) {
        super();
        this.title = new Text(data.text);
        this.display_priority = data.displayPriority;
    }
}
export default MusicResponsiveListItemFixedColumn;
