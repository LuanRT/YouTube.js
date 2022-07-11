import Author from "./Author.js";
import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./Text.js";

class GridChannel {
    type = 'GridChannel';
    constructor(data) {
        this.id = data.channelId;
        this.author = new Author({
            ...data.title,
            navigationEndpoint: data.navigationEndpoint
        }, data.ownerBadges, data.thumbnail);
        this.subscribers = new Text(data.subscriberCountText);
        this.video_count = new Text(data.videoCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.subscribe_button = Parser.parse(data.subscribeButton);
    }
}
export default GridChannel;
