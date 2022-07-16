import Parser from "../index";
import Text from "./misc/Text";

import { YTNode } from "../helpers";

class ChannelFeaturedContent extends YTNode {
    static type = 'ChannelFeaturedContent';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.items = Parser.parse(data.items);
    }
}
export default ChannelFeaturedContent;
