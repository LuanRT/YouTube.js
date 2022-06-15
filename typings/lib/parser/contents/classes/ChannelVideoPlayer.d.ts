export = ChannelVideoPlayer;
declare class ChannelVideoPlayer {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    description: Text;
    views: Text;
    published_at: Text;
}
import Text = require("./Text");
