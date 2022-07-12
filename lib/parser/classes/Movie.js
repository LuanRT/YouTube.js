import Parser from "../index.js";
import Author from "./misc/Author.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Utils from "../../utils/Utils.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class Movie extends YTNode {
    static type = 'Movie';
    constructor(data) {
        super();
        const overlay_time_status = data.thumbnailOverlays
            .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)
            ?.thumbnailOverlayTimeStatusRenderer.text || 'N/A';
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.description_snippet = data.descriptionSnippet ? new Text(data.descriptionSnippet, '') : null;
        this.top_metadata_items = new Text(data.topMetadataItems);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
        this.duration = {
            text: data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text,
            seconds: Utils.timeToSeconds(data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text)
        };
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.badges = Parser.parse(data.badges);
        this.use_vertical_poster = data.useVerticalPoster;
        this.show_action_menu = data.showActionMenu;
        this.menu = Parser.parse(data.menu);
    }
}
export default Movie;
