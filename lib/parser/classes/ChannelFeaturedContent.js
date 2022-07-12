import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class ChannelFeaturedContent extends YTNode {
    static #type = Symbol('ChannelFeaturedContent');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.items = Parser.parse(data.items);
    }
}
export default ChannelFeaturedContent;
