const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class ReelItem {
    type = 'ReelItem';

    constructor(item) {
        this.id = item.videoId;
        this.title = new Text(item.headline, '').text;
        this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
        this.views = new Text(item.viewCountText, '').text;
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    }
}

module.exports = ReelItem;