import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class MetadataRowHeader extends YTNode {
    static [ParserTypeSymbol] = 'MetadataRowHeader';
    constructor(data) {
        super();
        this.content = new Text(data.content);
        this.has_divider_line = data.hasDividerLine;
    }
}
export default MetadataRowHeader;
