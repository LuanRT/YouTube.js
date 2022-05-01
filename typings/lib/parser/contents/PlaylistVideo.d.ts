export = PlaylistVideo;
declare class PlaylistVideo {
    constructor(item: any);
    type: string;
    index: any;
    is_playable: any;
    duration: Text;
    endpoint: NavigationEndpoint;
    author: NavigatableText;
    thumbnails: Thumbnail[];
    title: Text;
    id: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
import NavigatableText = require("./NavigatableText");
import Thumbnail = require("./Thumbnail");
