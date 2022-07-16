import Parser from "../index";
import Text from "./misc/Text";
import Thumbnail from "./misc/Thumbnail";
import NavigationEndpoint from "./NavigationEndpoint";
import { timeToSeconds } from "../../utils/Utils";

import { YTNode } from "../helpers";

class PlaylistPanelVideo extends YTNode {
    static type = 'PlaylistPanelVideo';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.selected = data.selected;
        this.video_id = data.videoId;
        this.duration = {
            text: new Text(data.lengthText).toString(),
            seconds: timeToSeconds(new Text(data.lengthText).toString())
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
