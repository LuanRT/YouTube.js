import Parser from "../index.js";
import Text from "./Text.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Utils from "../../utils/Utils.js";

class PlaylistPanelVideo {
    type = 'PlaylistPanelVideo';
    constructor(data) {
        this.title = new Text(data.title);
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.selected = data.selected;
        this.video_id = data.videoId;
        this.duration = {
            text: new Text(data.lengthText).toString(),
            seconds: Utils.timeToSeconds(new Text(data.lengthText).toString())
        };
        const album = new Text(data.longBylineText).runs.find((run) => run.endpoint.browse?.id.startsWith('MPR'));
        const artists = new Text(data.longBylineText).runs.filter((run) => run.endpoint.browse?.id.startsWith('UC'));
        this.author = new Text(data.shortBylineText).toString();
        album && (this.album = {
            id: album.endpoint.browse.id,
            name: album.text,
            year: new Text(data.longBylineText).runs.slice(-1)[0].text,
            endpoint: album.endpoint
        });
        this.artists = artists.map((artist) => ({
            name: artist.text,
            channel_id: artist.endpoint.browse.id,
            endpoint: artist.endpoint
        }));
        this.badges = Parser.parse(data.badges);
        this.menu = Parser.parse(data.menu);
        this.set_video_id = data.playlistSetVideoId;
    }
}
export default PlaylistPanelVideo;
