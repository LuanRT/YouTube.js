import Parser from "../index.js";
import Text from "./Text.js";

class ChannelFeaturedContent {
    type = 'ChannelFeaturedContent';
    constructor(data) {
        this.title = new Text(data.title);
        this.items = Parser.parse(data.items);
    }
}
export default ChannelFeaturedContent;
