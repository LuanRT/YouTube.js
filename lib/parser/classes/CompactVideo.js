import Parser from "../index.js";
import Text from "./misc/Text.js";
import Author from "./misc/Author.js";
import Utils from "../../utils/Utils.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class CompactVideo extends YTNode {
    static #type = Symbol('CompactVideo');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.id = data.videoId;
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail) || null;
        this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
        this.title = new Text(data.title);
        this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnail);
        this.view_count = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        this.published = new Text(data.publishedTimeText);
        this.duration = {
            text: new Text(data.lengthText).toString(),
            seconds: Utils.timeToSeconds(new Text(data.lengthText).toString())
        };
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.menu = Parser.parse(data.menu);
    }
    get best_thumbnail() {
        return this.thumbnails[0];
    }
}
export default CompactVideo;
