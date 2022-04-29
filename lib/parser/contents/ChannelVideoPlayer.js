const ResultsParser = require(".");
const Text = require("./Text");

class ChannelVideoPlayer {
    type = 'ChannelVideoPlayer';

    constructor(item) {
        this.id = item.videoId;
        this.title = new Text(item.title, '').text;
        this.description = new Text(item.description, '').text;
        this.views = new Text(item.viewCountText, '').text;
        this.published_at = new Text(item.publishedTimeText, '').text;
    }
}

module.exports = ChannelVideoPlayer;