import Text from "./misc/Text.js";
import Parser from "../index.js";
import Thumbnail from "./Thumbnail.js";
import PlaylistAuthor from "./PlaylistAuthor.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class PlaylistVideo extends YTNode {
    static [ParserTypeSymbol] = 'PlaylistVideo';
    constructor(data) {
        super();
        this.id = data.videoId;
        this.index = new Text(data.index);
        this.title = new Text(data.title);
        this.author = new PlaylistAuthor(data.shortBylineText);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.set_video_id = data?.setVideoId;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.is_playable = data.isPlayable;
        this.menu = Parser.parse(data.menu);
        this.duration = {
            text: new Text(data.lengthText).text,
            seconds: parseInt(data.lengthSeconds)
        };
    }
}
export default PlaylistVideo;
