import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ChannelMobileHeader extends YTNode {
    static [ParserTypeSymbol] = 'ChannelMobileHeader';
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
export default ChannelMobileHeader;
