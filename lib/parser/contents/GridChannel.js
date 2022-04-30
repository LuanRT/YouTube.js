const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class GridChannel {
    type = 'GridChannel';

    constructor(item) {
        this.id = item.channelId;
        this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
        this.videos = new Text(item.videoCountText);
        this.subscribers = new Text(item.subscriberCountText);
        this.name = new Text(item.title);
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    }
}

module.exports = GridChannel;