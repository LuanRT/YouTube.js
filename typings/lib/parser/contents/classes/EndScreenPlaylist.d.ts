export = EndScreenPlaylist;
declare class EndScreenPlaylist {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    author: Text;
    endpoint: NavigationEndpoint;
    thumbnails: any;
    video_count: Text;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
