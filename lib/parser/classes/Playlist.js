import Text from "./Text.js";
import Parser from "../index.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import PlaylistAuthor from "./PlaylistAuthor.js";

class Playlist {
    type = 'Playlist';
    constructor(data) {
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
