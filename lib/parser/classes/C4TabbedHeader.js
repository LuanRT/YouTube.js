import Parser from "../index.js";
import Author from "./misc/Author.js";
import Thumbnail from "./Thumbnail.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class C4TabbedHeader extends YTNode {
    static #type = Symbol('C4TabbedHeader');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.author = new Author({
            simpleText: data.title,
            navigationEndpoint: data.navigationEndpoint
        }, data.badges, data.avatar);
        this.banner = data.banner ? Thumbnail.fromResponse(data.banner) : [];
        this.tv_banner = data.tvBanner ? Thumbnail.fromResponse(data.tvBanner) : [];
        this.mobile_banner = data.mobileBanner ? Thumbnail.fromResponse(data.mobileBanner) : [];
        this.subscribers = new Text(data.subscriberCountText);
        this.sponsor_button = data.sponsorButton && Parser.parse(data.sponsorButton);
        this.subscribe_button = data.subscribeButton && Parser.parse(data.subscribeButton);
        this.header_links = data.headerLinks && Parser.parse(data.headerLinks);
    }
}
export default C4TabbedHeader;
