import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class MetadataRow extends YTNode {
    static [ParserTypeSymbol] = 'MetadataRow';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.contents = data.contents.map((content) => new Text(content));
    }
}
export default MetadataRow;
