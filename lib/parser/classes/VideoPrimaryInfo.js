import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class VideoPrimaryInfo extends YTNode {
    static [ParserTypeSymbol] = 'VideoPrimaryInfo';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.super_title_link = new Text(data.superTitleLink);
        this.view_count = new Text(data.viewCount.videoViewCountRenderer.viewCount);
        this.short_view_count = new Text(data.viewCount.videoViewCountRenderer.shortViewCount);
        this.published = new Text(data.dateText);
        this.menu = Parser.parse(data.videoActions);
    }
}
export default VideoPrimaryInfo;
