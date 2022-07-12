import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ChannelFeaturedContent extends YTNode {
    static [ParserTypeSymbol] = 'ChannelFeaturedContent';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.items = Parser.parse(data.items);
    }
}
export default ChannelFeaturedContent;
