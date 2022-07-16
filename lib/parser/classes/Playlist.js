import Text from "./misc/Text";
import Parser from "../index";
import Thumbnail from "./misc/Thumbnail";
import NavigationEndpoint from "./NavigationEndpoint";
import PlaylistAuthor from "./misc/PlaylistAuthor";

import { YTNode } from "../helpers";

class Playlist extends YTNode {
    static type = 'Playlist';
    constructor(data) {
        super();
        this.id = data.playlistId;
        this.title = new Text(data.title);
        this.author = data.shortBylineText?.simpleText ?
            new Text(data.shortBylineText) :
            new PlaylistAuthor(data.longBylineText, data.ownerBadges, null);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail || { thumbnails: data.thumbnails.map((th) => th.thumbnails).flat(1) });
        this.video_count = new Text(data.thumbnailText);
        this.video_count_short = new Text(data.videoCountShortText);
        this.first_videos = Parser.parse(data.videos) || [];
        this.share_url = data.shareUrl || null;
        this.menu = Parser.parse(data.menu);
        this.badges = Parser.parse(data.ownerBadges);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays) || [];
    }
}
export default Playlist;
