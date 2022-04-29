const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class GridVideo {
    type = 'GridVideo';

    constructor(item) {
        this.id = item.videoId;
        this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
        this.title = new Text(item.title, '').text;
        this.badges = Array.isArray(item.badges) ? ResultsParser.parse(item.badges) : [];
        const lengthAlt = item.thumbnailOverlays.find(overlay => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
        this.duration = item.lengthText ? new Text(item.lengthText, '').text : lengthAlt?.text ? new Text(lengthAlt.text).text : '';
        this.published_at = new Text(item.publishedTimeText, '').text;
        this.views = new Text(item.viewCountText, '').text;
        // TODO: rich thumbnail?
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    }
}

module.exports = GridVideo;