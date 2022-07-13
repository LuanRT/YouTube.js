import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";
import Menu from "./menus/Menu.js";

class VideoPrimaryInfo extends YTNode {
    static type = 'VideoPrimaryInfo';
    title;
    super_title_link;
    view_count;
    short_view_count;
    published;
    menu;
    constructor(data: any) {
        super();
        this.title = new Text(data.title);
        this.super_title_link = new Text(data.superTitleLink);
        this.view_count = new Text(data.viewCount.videoViewCountRenderer.viewCount);
        this.short_view_count = new Text(data.viewCount.videoViewCountRenderer.shortViewCount);
        this.published = new Text(data.dateText);
        this.menu = Parser.parseItem(data.videoActions, Menu);
    }
}
export default VideoPrimaryInfo;
