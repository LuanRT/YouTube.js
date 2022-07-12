import Parser from "../index.js";
import Text from "./misc/Text.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Author from "./misc/Author.js";

import { YTNode } from "..";

class GridVideo extends YTNode {
    static type = 'GridVideo';
    constructor(data) {
        super();
        const length_alt = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
        this.published = new Text(data.publishedTimeText);
        this.duration = data.lengthText ? new Text(data.lengthText) : length_alt?.text ? new Text(length_alt.text) : '';
        this.author = data.shortBylineText && new Author(data.shortBylineText, data.ownerBadges);
        this.views = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.menu = Parser.parse(data.menu);
    }
}
export default GridVideo;
